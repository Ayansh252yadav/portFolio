import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Github } from '../common/Icons';
import { Badge } from '../common/Badge';

export function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="group bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-lg p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-xs">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
            {project.metrics?.type || 'Engineering Project'}
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-slate-500 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-6">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default" size="xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
        >
          <span>Architecture Specs</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Repo ↗
          </a>
        )}
      </div>
    </div>
  );
}
