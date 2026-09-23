import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Shield, Layers, HelpCircle } from 'lucide-react';
import { Github } from '../common/Icons';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export function ProjectDetailModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Project Details`}
    >
      <div
        className="w-full max-w-3xl my-8 bg-white dark:bg-[#10141e] border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-medium text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                Technical Deep Dive
              </span>
              {project.featured && (
                <Badge variant="accent" size="xs">
                  Featured Project
                </Badge>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
          {/* Problem Statement */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-sky-500" />
              Project Purpose & Problem Statement
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {project.problemStatement}
            </p>
          </div>

          {/* Architecture Overview */}
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80">
            <h4 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
              <Layers className="w-3.5 h-3.5 text-sky-500" />
              System Architecture & Data Flow
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
              Verified Implemented Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Decisions & Challenges */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
              <Shield className="w-3.5 h-3.5 text-sky-500" />
              Key Engineering Decisions & Trade-offs
            </h4>
            <div className="space-y-2">
              {project.engineeringDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="p-3 text-xs leading-relaxed rounded bg-white dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800/70 text-slate-600 dark:text-slate-300"
                >
                  {decision}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="flex items-center gap-2">
            {project.github && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                variant="primary"
                size="sm"
                icon={Github}
              >
                View Repository
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

          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
