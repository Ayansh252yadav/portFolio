import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';
import {
  Terminal,
  Database,
  Server,
  Code,
  Workflow,
} from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Java & DSA',
      detail:
        'Currently practicing Data Structures & Algorithms using Java for problem solving and placement preparation.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      detail:
        'Building backend applications with Spring Boot and working with REST APIs, Spring Security, and JWT.',
    },
    {
      icon: Database,
      title: 'Database',
      detail:
        'Working with MySQL, SQL, and JPA/Hibernate while learning relational database concepts.',
    },
    {
      icon: Terminal,
      title: 'System Design — Beginner',
      detail:
        'Currently learning basic system design concepts such as APIs, scalability, caching, databases, and load balancing.',
    },
    {
      icon: Workflow,
      title: 'FDE — Beginner',
      detail:
        'Exploring Forward Deployed Engineering and learning how software can be applied to practical real-world problems.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-5xl mx-auto">

        <SectionHeading
          eyebrow="About Me"
          title="My Background"
          description="A simple overview of my current learning and development focus."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">

            <p>
              I am a B.Tech Computer Science and Engineering student based in{' '}
              {personalInfo.location}. I am currently focused on Java, Data
              Structures & Algorithms, backend development, and web development.
            </p>

            <p>
              I enjoy building projects and learning how different parts of a
              software application work together, from APIs and databases to
              authentication and frontend applications.
            </p>

            <p>
              I have worked on projects including{' '}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                ProfileHub
              </strong>
              , a full-stack application built with React and Spring Boot,{' '}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                CommitCraftHub
              </strong>
              , a backend-focused Spring Boot project, and{' '}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                MeetSphere
              </strong>
              , where I explore WebSocket and WebRTC.
            </p>

            <p>
              I am also beginning to learn{' '}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                System Design
              </strong>{' '}
              and{' '}
              <strong className="text-slate-900 dark:text-slate-100 font-semibold">
                Forward Deployed Engineering (FDE)
              </strong>
              .
            </p>

            <p className="p-3.5 rounded-md bg-slate-100 dark:bg-slate-800/60 border-l-2 border-sky-500 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
              "Currently focused on DSA, backend development, and building
              practical projects while learning system design and FDE."
            </p>

          </div>

          {/* Core Competencies */}
          <div className="lg:col-span-5 space-y-3">

            {highlights.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white dark:bg-[#10141e] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3">

                    <div className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}