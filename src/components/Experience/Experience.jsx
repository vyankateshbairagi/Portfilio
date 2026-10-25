import React, { memo } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/experienceData';

const Experience = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const cardShell = isDark
    ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/30 card-highlight hover:border-cyan-500/30 transition-all duration-300'
    : 'bg-white/85 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-slate-300 transition-all duration-300';

  const badgeShell = isDark
    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 shadow-sm'
    : 'bg-cyan-50 border-cyan-200 text-cyan-800 shadow-sm';

  const pillShell = isDark
    ? 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors'
    : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-800 transition-colors';

  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 backdrop-blur-md shadow-sm">
            <Briefcase size={13} />
            <span>Work Experience</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Internship</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Hands-on frontend engineering, reusable UI components, and API integration for production logistics workflows.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${cardShell}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-800/40">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3
                      className={`text-xl sm:text-2xl font-bold font-['Manrope'] ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeShell}`}>
                      {item.type}
                    </span>
                  </div>
                  <p
                    className={`text-base font-semibold ${
                      isDark ? 'text-cyan-300' : 'text-cyan-700'
                    }`}
                  >
                    {item.organization}
                  </p>
                </div>

                <div
                  className={`flex flex-col sm:items-end gap-1 text-xs font-mono ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p
                className={`mt-4 text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {item.description}
              </p>

              <div className="mt-6 space-y-3">
                <h4
                  className={`text-xs uppercase tracking-wider font-mono font-semibold ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Key Engineering Contributions:
                </h4>
                <ul className="grid gap-2.5 sm:gap-3">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="text-cyan-400 shrink-0 mt-0.5"
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-800/30 flex flex-wrap gap-2 items-center">
                <span
                  className={`text-xs font-mono ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Technologies:
                </span>
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border ${pillShell}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
