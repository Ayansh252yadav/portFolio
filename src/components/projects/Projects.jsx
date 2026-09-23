import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { projects } from '../../data/portfolioData';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featured = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio of Work"
          title="Featured Projects & Software Systems"
          description="Real full-stack and backend systems built with clean architecture, verified functionality, and transparent engineering decisions."
        />

        {/* Featured Project */}
        {featured && (
          <FeaturedProject
            project={featured}
            onOpenDetails={handleOpenDetails}
          />
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Deep Dive Architecture Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
