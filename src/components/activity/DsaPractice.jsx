import React from 'react';
import { dsaActivity } from '../../data/portfolioData';
import { Code2, ExternalLink } from 'lucide-react';
import { Badge } from '../common/Badge';

export function DsaPractice() {
  return (
    <div className="bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-6 sm:p-8 mt-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              {dsaActivity.title}
            </h3>
            <p className="text-xs font-mono text-slate-500">
              Primary Language: {dsaActivity.language}
            </p>
          </div>
        </div>

        <a
          href={dsaActivity.leetcodeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
        >
          <span>LeetCode Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <p className="py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {dsaActivity.focusDescription}
      </p>

      {/* Topics breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
        {dsaActivity.topics.map((topic) => (
          <div
            key={topic.name}
            className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-200">
                {topic.name}
              </span>
              <Badge variant="accent" size="xs">
                {topic.status}
              </Badge>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {topic.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
