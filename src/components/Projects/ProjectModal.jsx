import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, AlertCircle } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const modalBg = isDark
    ? 'bg-slate-950/95 border-slate-800/90 text-white shadow-2xl shadow-black/80 backdrop-blur-2xl card-highlight'
    : 'bg-white/95 border-slate-200 text-slate-900 shadow-2xl backdrop-blur-2xl';

  const sectionBox = isDark
    ? 'bg-slate-900/50 border-slate-800/80 rounded-xl'
    : 'bg-slate-50/80 border-slate-200 rounded-xl';

  const pillShell = isDark
    ? 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300 shadow-xs'
    : 'bg-cyan-50 border-cyan-200 text-cyan-800 shadow-xs';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className={`relative w-full max-w-3xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto my-auto ${modalBg}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-xl border transition-colors ${
            isDark
              ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              : 'border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          aria-label="Close case study modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              {project.badge}
            </span>
            <span
              className={`text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {project.year}
            </span>
            <span
              className={`text-xs font-mono px-2 py-0.5 rounded ${
                isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
              }`}
            >
              {project.statusBadge}
            </span>
          </div>

          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-bold font-['Manrope'] mb-2"
          >
            {project.title}
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {project.tagline}
          </p>
        </div>

        {/* Problem Statement & Solution */}
        <div className="grid gap-4 mt-6">
          <div className={`p-4 rounded-xl border ${sectionBox}`}>
            <h3 className="text-xs uppercase font-mono tracking-wider text-rose-400 font-semibold mb-1.5 flex items-center gap-1.5">
              <AlertCircle size={14} /> Problem Statement
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {project.problemStatement}
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${sectionBox}`}>
            <h3 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold mb-1.5 flex items-center gap-1.5">
              <Layers size={14} /> Engineering Solution
            </h3>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {project.solutionOverview}
            </p>
          </div>
        </div>

        {/* Architecture Highlights */}
        {project.architectureHighlights && (
          <div className="mt-6">
            <h3 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
              <Cpu size={14} /> System Architecture & Decisions
            </h3>
            <ul className="grid gap-2">
              {project.architectureHighlights.map((arch, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 text-xs sm:text-sm p-2.5 rounded-lg border ${
                    isDark ? 'bg-slate-900/40 border-slate-800/60 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Features */}
        <div className="mt-6">
          <h3
            className={`text-xs uppercase font-mono tracking-wider font-semibold mb-3 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Key Capabilities:
          </h3>
          <div className="grid gap-2">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 pt-5 border-t border-slate-800/40">
          <h3
            className={`text-xs uppercase font-mono tracking-wider font-semibold mb-2.5 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Verified Technologies:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className={`px-2.5 py-1 rounded-md text-xs font-mono border ${pillShell}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-5 border-t border-slate-800/40 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <Github size={16} />
              <span>Inspect Source Code</span>
            </a>
          )}

          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-md"
            >
              <ExternalLink size={16} />
              <span>Launch Live Application</span>
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono border ${
                isDark ? 'border-slate-800 bg-slate-900/50 text-slate-400' : 'border-slate-200 bg-slate-100 text-slate-500'
              }`}
            >
              Live Demo: Coming Soon / Source Available
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
