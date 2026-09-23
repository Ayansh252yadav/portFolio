import React, { useState, useEffect, useRef } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
  LineBasicMaterial,
  LineSegments,
} from 'three';
import { SystemFallback } from './SystemFallback';

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;
  try {
    const testCanvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function SystemCanvas({ isDark }) {
  const containerRef = useRef(null);
  const [hasWebGL] = useState(checkWebGLSupport);

  useEffect(() => {
    if (!hasWebGL) return;

    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene setup
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 24;

    let renderer;
    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    // Node topology generation
    const nodeCount = isMobile ? 12 : 24;
    const nodes = [];
    const nodePositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * (isMobile ? 14 : 22);
      const y = (Math.random() - 0.5) * (isMobile ? 12 : 14);
      const z = (Math.random() - 0.5) * 8;
      nodes.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.003,
        vy: (Math.random() - 0.5) * 0.003,
        vz: (Math.random() - 0.5) * 0.002,
      });
      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;
    }

    // Node points geometry
    const pointGeometry = new BufferGeometry();
    pointGeometry.setAttribute('position', new BufferAttribute(nodePositions, 3));

    // Dynamic point color based on dark/light
    const pointColor = isDark ? 0x38bdf8 : 0x0284c7;
    const lineColor = isDark ? 0x38bdf8 : 0x2563eb;

    const pointMaterial = new PointsMaterial({
      color: pointColor,
      size: isMobile ? 0.35 : 0.45,
      transparent: true,
      opacity: isDark ? 0.75 : 0.65,
    });

    const pointCloud = new Points(pointGeometry, pointMaterial);
    scene.add(pointCloud);

    // Line connections geometry
    const maxConnections = nodeCount * 3;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new BufferGeometry();
    lineGeometry.setAttribute('position', new BufferAttribute(linePositions, 3));

    const lineMaterial = new LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: isDark ? 0.22 : 0.18,
    });

    const linesMesh = new LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse interaction parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle tab visibility
    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Resize listener
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabVisible) return;

      // Parallax easing
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        scene.rotation.y = mouseX * 0.15;
        scene.rotation.x = -mouseY * 0.1;

        // Subtle slow node drift
        let lineIdx = 0;
        const posAttr = pointGeometry.attributes.position;

        for (let i = 0; i < nodeCount; i++) {
          const node = nodes[i];
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          const limitX = isMobile ? 8 : 12;
          const limitY = 7;
          if (Math.abs(node.x) > limitX) node.vx *= -1;
          if (Math.abs(node.y) > limitY) node.vy *= -1;
          if (Math.abs(node.z) > 4) node.vz *= -1;

          posAttr.setXYZ(i, node.x, node.y, node.z);

          // Find nearby nodes to connect
          for (let j = i + 1; j < nodeCount; j++) {
            const nodeB = nodes[j];
            const dist = Math.hypot(node.x - nodeB.x, node.y - nodeB.y, node.z - nodeB.z);
            const connectionThreshold = isMobile ? 5.5 : 6.8;

            if (dist < connectionThreshold && lineIdx < maxConnections * 6 - 6) {
              linePositions[lineIdx++] = node.x;
              linePositions[lineIdx++] = node.y;
              linePositions[lineIdx++] = node.z;
              linePositions[lineIdx++] = nodeB.x;
              linePositions[lineIdx++] = nodeB.y;
              linePositions[lineIdx++] = nodeB.z;
            }
          }
        }

        posAttr.needsUpdate = true;
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.setDrawRange(0, lineIdx / 3);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      pointGeometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, [isDark, hasWebGL]);

  if (!hasWebGL) {
    return <SystemFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-45 dark:opacity-40 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
