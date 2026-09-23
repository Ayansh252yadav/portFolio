import React, { useState, useEffect } from 'react';
import { fetchGithubProfile, STATIC_GITHUB_DATA } from '../../utils/github';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { Github } from '../common/Icons';

export function GithubActivity() {
  const [githubState, setGithubState] = useState({
    data: STATIC_GITHUB_DATA,
    isLive: false,
    loading: true,
  });

  useEffect(() => {
    let mounted = true;
    fetchGithubProfile().then((res) => {
      if (mounted) {
        setGithubState({
          data: res.data,
          isLive: res.isLive,
          loading: false,
        });
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const { data, isLive, loading } = githubState;

  return (
    <div className="bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              GitHub Repositories
            </h3>
            <p className="text-xs font-mono text-slate-500">
              github.com/{data.username}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {loading ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <RefreshCw className="w-3 h-3 animate-spin" /> Fetching
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
              <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
              {isLive ? 'Live GitHub Sync' : 'Static Snapshot'}
            </span>
          )}

          <a
            href={data.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Repositories list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
        {data.publicRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between p-4 rounded-lg bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate">
                  {repo.name}
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                {repo.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                {repo.language}
              </span>
              <span>{repo.updatedAt}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
