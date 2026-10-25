import React, { memo } from 'react';
import { User, CheckCircle2, Terminal, ShieldCheck } from 'lucide-react';

const About = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const cardShell = isDark
    ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/30 card-highlight hover:border-cyan-500/30 transition-all duration-300'
    : 'bg-white/85 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-slate-300 transition-all duration-300';

  const metricBox = isDark
    ? 'bg-slate-950/60 border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 shadow-inner'
    : 'bg-slate-50/80 border-slate-200 hover:border-cyan-400 hover:bg-white transition-all duration-300 shadow-sm';

  const highlights = [
    'Computer Engineering Graduate (2026)',
    'Full-Stack MERN & Next.js Architecture',
    'PostgreSQL & MongoDB Relational/NoSQL Design',
    'AI Integration with Google Gemini & FastAPI',
    'Razorpay Payment & JWT/NextAuth RBAC Security',
    '3 Peer-Reviewed Academic Research Papers'
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 backdrop-blur-md shadow-sm">
            <User size={13} />
            <span>Profile & Background</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Background</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Bridging robust frontend interfaces, scalable backend services, and practical artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          {/* Factual Recruiter-Ready Narrative */}
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${cardShell}`}>
              <h3
                className={`text-xl sm:text-2xl font-bold font-['Manrope'] mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Full Stack Developer & Systems Thinker
              </h3>

              <div
                className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                <p>
                  I am a Computer Engineering graduate from Sandip Institute of Technology and Research Centre, Nashik, with an academic record of 8.23 CGPA. My core engineering focus centers on building reliable web applications, clean user interfaces, and structured backend systems.
                </p>
                <p>
                  In full-stack engineering, I specialize in the modern React and Next.js ecosystems, pairing frontend precision with Node.js/Express and Python FastAPI services. My development experience spans complete application lifecycles—implementing role-based access control (RBAC), stateless JWT and NextAuth authentication, database schema modeling across PostgreSQL and MongoDB, and verified payment gateways using Razorpay.
                </p>
                <p>
                  Beyond traditional web development, I actively integrate artificial intelligence into practical business workflows—such as automated ATS resume parsing and mock interview feedback with Google Gemini AI. My academic work includes three peer-reviewed research publications on automated web extraction, data normalization, and mobile civic systems.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/40">
                <h4
                  className={`text-xs uppercase font-mono tracking-wider font-semibold mb-3 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Core Technical Competencies:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Verified Snapshot */}
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${cardShell}`}>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/40">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-cyan-400" />
                  <span
                    className={`text-xs uppercase font-mono tracking-wider font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Academic & Engineering Facts
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  Verified
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border text-center ${metricBox}`}>
                  <p className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">8.23</p>
                  <p
                    className={`text-xs uppercase tracking-wider font-medium mt-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    B.E. CGPA (Verified)
                  </p>
                </div>

                <div className={`p-4 rounded-xl border text-center ${metricBox}`}>
                  <p className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">3</p>
                  <p
                    className={`text-xs uppercase tracking-wider font-medium mt-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Peer-Reviewed Papers
                  </p>
                </div>

                <div className={`p-4 rounded-xl border text-center ${metricBox}`}>
                  <p className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">84.8%</p>
                  <p
                    className={`text-xs uppercase tracking-wider font-medium mt-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Diploma Aggregate
                  </p>
                </div>

                <div className={`p-4 rounded-xl border text-center ${metricBox}`}>
                  <p className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">383+</p>
                  <p
                    className={`text-xs uppercase tracking-wider font-medium mt-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Students Mentored (CESA)
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/40">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5
                      className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}
                    >
                      Engineering Philosophy
                    </h5>
                    <p
                      className={`text-xs leading-relaxed mt-1 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      Clean architecture over shortcuts, maintainable types, documented REST endpoints, and verified testing before shipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
