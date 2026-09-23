import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { skillCategories } from '../../data/portfolioData';
import { SkillCategory } from './SkillCategory';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Engineering Competencies"
          description="Categorized by functional domain. Structured around solid computing fundamentals and practical backend architectures rather than artificial proficiency metrics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              description={category.description}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
