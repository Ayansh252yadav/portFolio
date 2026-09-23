import React from 'react';

export function SkillCategory({ title, description, skills }) {
  return (
    <div className="bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
            {title}
          </h3>
          <span className="text-[11px] font-mono text-slate-400">
            {skills.length} items
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/70">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-baseline justify-between text-xs py-1 px-1.5 rounded hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
              {skill.name}
            </span>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 text-right truncate max-w-[55%]">
              {skill.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
