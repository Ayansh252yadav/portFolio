import React from 'react';
import { ExternalLink, Info, CheckCircle2, Layers } from 'lucide-react';
import { Github } from '../common/Icons';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export function FeaturedProject({ project, onOpenDetails }) {
  return (
    <div className="bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 mb-8">
      {/* Featured Header Bar */}
      <div className="px-6 py-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span>Featured Full-Stack Project</span>
        </div>
        <span className="text-slate-400">Spring Boot • React • MySQL</span>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Core Overview (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-500 mb-4">
              {project.tagline}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Implemented Features Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {project.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="sm"
                icon={Info}
                onClick={() => onOpenDetails(project)}
              >
                Deep Dive & Architecture
              </Button>

              {project.github && (
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  variant="outline"
                  size="sm"
                  icon={Github}
                >
                  GitHub Repository
                </Button>
              )}

              {project.liveDemo && (
                <Button
                  as="a"
                  href={project.liveDemo}
                  target="_blank"
                  variant="secondary"
                  size="sm"
                  icon={ExternalLink}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-lg p-5 text-xs font-mono space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80 text-slate-400">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                <Layers className="w-3.5 h-3.5 text-sky-500" />
                System Topology
              </span>
              <span className="text-[11px]">Decoupled Architecture</span>
            </div>

            <div className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
              <div className="p-2.5 rounded bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                <div className="font-semibold text-slate-900 dark:text-slate-200 mb-1 flex items-center justify-between">
                  <span>Client Tier</span>
                  <Badge variant="default" size="xs">React SPA</Badge>
                </div>
                <p>Component-based views for profile management, authentication forms, and dynamic post streams.</p>
              </div>

              <div className="p-2.5 rounded bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                <div className="font-semibold text-slate-900 dark:text-slate-200 mb-1 flex items-center justify-between">
                  <span>API & Security Tier</span>
                  <Badge variant="accent" size="xs">Spring Boot</Badge>
                </div>
                <p>Spring Security filter chain handling stateless JWT validation, Google OAuth2, and REST services.</p>
              </div>

              <div className="p-2.5 rounded bg-white dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                <div className="font-semibold text-slate-900 dark:text-slate-200 mb-1 flex items-center justify-between">
                  <span>Persistence & Media</span>
                  <Badge variant="default" size="xs">MySQL + Cloudinary</Badge>
                </div>
                <p>Normalized relational schemas for user graphs; binary media assets offloaded to Cloudinary CDN.</p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 text-center">
              Click &quot;Deep Dive & Architecture&quot; for complete engineering specs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
