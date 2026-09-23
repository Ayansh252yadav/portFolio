import React from 'react';
import { Home, Terminal } from 'lucide-react';
import { Button } from '../common/Button';

export function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#f8fafc] text-[#0f172a] dark:bg-[#090b10] dark:text-[#f8fafc]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            HTTP 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mt-1 mb-2">
            Resource Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The requested route does not exist or has been relocated.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            icon={Home}
            onClick={onGoHome || (() => (window.location.href = '/'))}
          >
            Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
