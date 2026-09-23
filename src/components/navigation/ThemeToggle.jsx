import React from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ isDark, onToggle, className = '' }) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors cursor-pointer ${className}`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
