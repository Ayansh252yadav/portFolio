import React, { Suspense, lazy } from 'react';
import { ArrowRight, FileText, Mail, MapPin, Terminal, Code2 } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { personalInfo } from '../../data/portfolioData';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { SystemFallback } from './SystemFallback';

// Lazy load Three.js Canvas to maintain instant initial load
const SystemCanvas = lazy(() =>
  import('./SystemCanvas').then((module) => ({ default: module.SystemCanvas }))
);

export function Hero({ isDark, onOpenCommandPalette }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60"
    >
      {/* Background Interactive Topology */}
      <Suspense fallback={<SystemFallback />}>
        <SystemCanvas isDark={isDark} />
      </Suspense>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-left">
        {/* Top Status & Location Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Placement Prep • Open to Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Main Identity & Role */}
        <div className="mb-4">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-medium">
            {personalInfo.role}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mt-1 mb-4 leading-tight">
            {personalInfo.name}
          </h1>
        </div>

        {/* Engineering Headline */}
        <p className="text-xl sm:text-2xl font-medium text-slate-800 dark:text-slate-200 tracking-tight mb-4 max-w-2xl leading-snug">
          {personalInfo.headline}
        </p>

        {/* Honest, Student-Centered Narrative */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed">
          {personalInfo.summary}
        </p>

        {/* Core Pillars / Positioning Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge variant="default" size="md">
            <Code2 className="w-3.5 h-3.5 mr-1 text-sky-500" /> Java Core & DSA
          </Badge>
          <Badge variant="default" size="md">
            <Terminal className="w-3.5 h-3.5 mr-1 text-emerald-500" /> Spring Boot & REST APIs
          </Badge>
          <Badge variant="default" size="md">
            MySQL & Relational Systems
          </Badge>
          <Badge variant="default" size="md">
            React & Web Technologies
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Button
            as="a"
            href="#projects"
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            View Projects
          </Button>

          <Button
            as="a"
            href={personalInfo.resumePath}
            download="Ayansh_Yadav_Resume.pdf"
            variant="outline"
            size="md"
            icon={FileText}
          >
            Download Resume
          </Button>

          <Button
            as="a"
            href="#contact"
            variant="ghost"
            size="md"
            icon={Mail}
          >
            Contact
          </Button>
        </div>

        {/* Quick Footer Details: Socials & Command Palette Shortcut */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode</span>
            </a>
          </div>

          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <span>Quick navigation</span>
            <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              Ctrl+K
            </kbd>
          </button>
        </div>
      </div>
    </section>
  );
}
