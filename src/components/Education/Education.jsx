import React, { memo } from 'react';
import {
  GraduationCap,
  Award,
  Users,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import {
  educationData,
  certificationsData,
  leadershipData
} from '../../data/educationData';

const Education = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const cardShell = isDark
    ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/30 card-highlight hover:border-cyan-500/30 transition-all duration-300'
    : 'bg-white/85 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-slate-300 transition-all duration-300';

  const subCardShell = isDark
    ? 'bg-slate-950/60 border-slate-800/80 shadow-inner'
    : 'bg-slate-50 border-slate-200 shadow-sm';

  return (
    <section
      id="education"
      className="py-24 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 backdrop-blur-md shadow-sm">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Education & <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Formal computer engineering education, professional technical certifications, and student community coordination.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid gap-6 mb-12">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${cardShell}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800/40">
                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold font-['Manrope'] ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className={`text-sm sm:text-base font-semibold mt-0.5 ${
                      isDark ? 'text-cyan-300' : 'text-cyan-700'
                    }`}
                  >
                    {edu.institution}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    {edu.gradeLabel}: {edu.grade}
                  </span>
                  <div
                    className={`flex items-center gap-1.5 text-xs font-mono ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {edu.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Leadership Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className={`rounded-2xl border p-6 sm:p-8 ${cardShell}`}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/40">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Award size={20} />
              </div>
              <div>
                <h3
                  className={`text-lg font-bold font-['Manrope'] ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Technical Certifications
                </h3>
                <p
                  className={`text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Industry-verified coursework credentials
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${subCardShell}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className={`text-sm font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {cert.name}
                    </h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {cert.issuer}
                    </span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Co-Curricular */}
          <div className={`rounded-2xl border p-6 sm:p-8 ${cardShell}`}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/40">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Users size={20} />
              </div>
              <div>
                <h3
                  className={`text-lg font-bold font-['Manrope'] ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Leadership & Engagement
                </h3>
                <p
                  className={`text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  Department student association activities
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {leadershipData.map((lead, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${subCardShell}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h4
                        className={`text-sm font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {lead.role} — {lead.organization}
                      </h4>
                      <p
                        className={`text-xs ${
                          isDark ? 'text-cyan-400/90' : 'text-cyan-700'
                        }`}
                      >
                        {lead.institution}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-mono shrink-0 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {lead.period}
                    </span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {lead.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Education);
