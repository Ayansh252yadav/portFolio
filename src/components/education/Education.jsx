import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { education } from '../../data/portfolioData';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';
import { Badge } from '../common/Badge';

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Currently pursuing a B.Tech in Computer Science and Engineering while building practical software development skills."
        />

        <div className="bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-6 sm:p-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800/80">

            <div className="flex items-start gap-4">

              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {education.degree}
                </h3>

                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                  {education.field}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500 font-mono">

                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {education.location}
                  </span>

                  <span>•</span>

                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {education.duration}
                  </span>

                </div>
              </div>

            </div>

            <Badge
              variant="accent"
              size="sm"
              className="self-start"
            >
              Undergraduate Degree
            </Badge>

          </div>


          {/* Summary */}
          <div className="py-6 border-b border-slate-100 dark:border-slate-800/80">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {education.summary}
            </p>
          </div>


          {/* Coursework */}
          <div className="pt-6">

            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-500" />
              <span>Coursework</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">

              {education.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />

                  <span>{course}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}