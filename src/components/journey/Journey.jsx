import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { journeyMilestones } from '../../data/portfolioData';
import { Badge } from '../common/Badge';
import { Calendar } from 'lucide-react';

export function Journey() {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Milestones"
          title="Development Journey & Focus Areas"
          description="A chronological record of personal engineering milestones, project development, and academic learning. (No fabricated internships or corporate roles)."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-10">
          {journeyMilestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#090b10] border-2 border-sky-500 group-hover:scale-125 transition-transform" />

              <div className="bg-white dark:bg-[#10141e] border border-slate-200/80 dark:border-slate-800/80 rounded-lg p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Personal & Academic Focus</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {item.focusTags.map((tag) => (
                    <Badge key={tag} variant="default" size="xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
