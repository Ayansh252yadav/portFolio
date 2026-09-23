import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ContactForm } from './ContactForm';
import { personalInfo } from '../../data/portfolioData';
import { MapPin, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Connect for Opportunities"
          description="I am actively seeking software engineering roles, full-stack positions, and internship opportunities. Feel free to reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="p-5 rounded-lg bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Social channels */}
            <div className="p-5 rounded-lg bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 space-y-3">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Developer Profiles
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-md bg-slate-50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800/60 transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span className="font-mono text-slate-800 dark:text-slate-200">GitHub</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">Ayansh252yadav ↗</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-md bg-slate-50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800/60 transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span className="font-mono text-slate-800 dark:text-slate-200">LinkedIn</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">Ayansh Yadav ↗</span>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-5 rounded-lg bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 text-xs">
              <span className="block font-mono uppercase tracking-wider text-slate-400 mb-2">
                Availability & Location
              </span>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                Open to on-site and remote opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#10141e] border border-slate-200/90 dark:border-slate-800/80 rounded-xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 font-mono mb-6">
              Recruiter queries, engineering discussions, or project collaborations.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
