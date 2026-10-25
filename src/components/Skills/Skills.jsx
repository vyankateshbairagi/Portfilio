import React, { memo } from 'react';
import {
  Wrench,
  Code2,
  Layout,
  Server,
  Database,
  Lock,
  Terminal,
  Cpu
} from 'lucide-react';
import { skillsData } from '../../data/skillsData';

const categoryIcons = {
  languages: Code2,
  frontend: Layout,
  backend: Server,
  databases: Database,
  authAndIntegrations: Lock,
  tools: Terminal,
  coreConcepts: Cpu
};

const SkillCategoryCard = ({ categoryKey, category, theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const Icon = categoryIcons[categoryKey] || Code2;

  const cardShell = isDark
    ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/30 card-highlight hover:border-cyan-500/40 hover:shadow-cyan-950/25 transition-all duration-300'
    : 'bg-white/85 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-cyan-500/40 transition-all duration-300';

  const pillShell = isDark
    ? 'bg-slate-800/70 border-slate-700/70 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-slate-800/90 shadow-xs'
    : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-cyan-500 hover:text-cyan-700 hover:bg-white shadow-xs';

  return (
    <div
      className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${cardShell}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors shadow-sm">
            <Icon size={20} />
          </div>
          <div>
            <h3
              className={`text-base font-bold font-['Plus_Jakarta_Sans',sans-serif] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {category.title}
            </h3>
            <p
              className={`text-xs ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {category.skills.map((skill, idx) => (
            <span
              key={idx}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 ${pillShell}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="skills"
      className="py-24 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 backdrop-blur-md shadow-sm">
            <Wrench size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Stack & Core</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Technologies, frameworks, databases, and computer science fundamentals verified through hands-on development and production projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([key, category]) => (
            <SkillCategoryCard
              key={key}
              categoryKey={key}
              category={category}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
