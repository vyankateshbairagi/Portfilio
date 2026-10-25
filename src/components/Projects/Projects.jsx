import React, { useState, memo } from 'react';
import { ExternalLink, Github, FolderGit2, ChevronRight, Code2 } from 'lucide-react';
import { projectsData, projectFilters } from '../../data/projectsData';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project, onSelect, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const cardShell = isDark
    ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/30 card-highlight hover:border-cyan-500/40 hover:shadow-cyan-950/25'
    : 'bg-white/85 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-cyan-500/40';

  const visualHeaderBg = isDark
    ? 'bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/95 border-b border-slate-800/80'
    : 'bg-gradient-to-br from-slate-100/90 via-white to-slate-100/90 border-b border-slate-200';

  const pillShell = isDark
    ? 'bg-slate-800/70 border-slate-700/60 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors'
    : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-800 transition-colors';

  return (
    <div
      className={`group rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${cardShell}`}
    >
      {/* Branded Visual Banner / Header */}
      <div className={`p-6 relative overflow-hidden flex flex-col justify-between min-h-[140px] ${visualHeaderBg}`}>
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            {project.badge}
          </span>
          <span
            className={`text-xs font-mono font-medium ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {project.year}
          </span>
        </div>

        <div className="z-10 mt-3">
          <h3
            className={`text-xl sm:text-2xl font-bold font-['Manrope'] tracking-tight ${
              isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
            } transition-colors`}
          >
            {project.title.split('–')[0].trim()}
          </h3>
          <p
            className={`text-xs font-mono mt-0.5 ${
              isDark ? 'text-cyan-400/80' : 'text-cyan-700'
            }`}
          >
            {project.title.split('–')[1]?.trim() || project.tagline}
          </p>
        </div>

        {/* Ambient subtle tech pattern overlay */}
        <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Code2 size={120} className="text-cyan-400" />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-1">
        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {project.tagline}
        </p>

        {/* Key Feature Bullets */}
        <div className="space-y-1.5 mb-5 flex-1">
          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
              <span
                className={`line-clamp-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 5).map((t, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded text-[11px] font-mono border ${pillShell}`}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-mono border ${pillShell}`}
            >
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between mt-auto">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:underline ${
              isDark ? 'text-cyan-300' : 'text-cyan-700'
            }`}
          >
            <span>View Architecture</span>
            <ChevronRight size={14} />
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                title="GitHub Repository"
                className={`p-2 rounded-lg border transition-colors ${
                  isDark
                    ? 'border-slate-800 bg-slate-800/60 text-slate-300 hover:text-white hover:border-slate-700'
                    : 'border-slate-200 bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Github size={16} />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo of ${project.title}`}
                title="Live Application"
                className="p-2 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.categories.includes(activeFilter);
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 backdrop-blur-md shadow-sm">
            <FolderGit2 size={13} />
            <span>Featured Engineering</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Production web applications, microservices, and AI integrations built with real architecture, role-based workflows, and clean code.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/25 font-bold'
                    : isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white backdrop-blur-md'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 backdrop-blur-md'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        theme={theme}
      />
    </section>
  );
};

export default memo(Projects);
