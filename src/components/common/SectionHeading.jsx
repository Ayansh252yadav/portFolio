import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto items-center',
  };

  return (
    <div className={`mb-10 sm:mb-12 max-w-3xl ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 text-xs font-mono font-medium tracking-wide uppercase rounded bg-slate-100 dark:bg-slate-800/80 text-sky-600 dark:text-sky-400 border border-slate-200 dark:border-slate-700/60">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
