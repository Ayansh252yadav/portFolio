import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { GithubActivity } from './GithubActivity';
import { DsaPractice } from './DsaPractice';

export function Activity() {
  return (
    <section id="activity" className="py-20 px-4 sm:px-6 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Continuous Practice"
          title="Engineering Activity & Code Rigor"
          description="Transparent insight into version control repositories and algorithmic problem solving without fabricated commit streaks or vanity metrics."
        />

        <GithubActivity />
        <DsaPractice />
      </div>
    </section>
  );
}
