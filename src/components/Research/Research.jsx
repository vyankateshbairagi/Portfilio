import React, { memo } from 'react';
import { BookOpen, FileText, ExternalLink, Activity } from 'lucide-react';
import { publicationsData } from '../../data/publicationsData';

const Research = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const cardShell = isDark
    ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/30 card-highlight hover:border-cyan-500/40 hover:shadow-cyan-950/25 transition-all duration-300'
    : 'bg-white/85 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-cyan-500/40 transition-all duration-300';

  const metricBox = isDark
    ? 'bg-slate-950/60 border-slate-800/80 shadow-inner'
    : 'bg-slate-50 border-slate-200 shadow-sm';

  const pillShell = isDark
    ? 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300 shadow-sm'
    : 'bg-cyan-50 border-cyan-200 text-cyan-800 shadow-sm';

  return (
    <section
      id="research"
      className="py-24 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 backdrop-blur-md shadow-sm">
            <BookOpen size={13} />
            <span>Peer-Reviewed Literature</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Research & <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Publications</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Academic research papers detailing automated web scraping systems, data normalization algorithms, and civic agricultural technology.
          </p>
        </div>

        <div className="grid gap-8">
          {publicationsData.map((pub) => (
            <article
              key={pub.id}
              className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 relative group ${cardShell}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      {pub.role}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {pub.year}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-md ${
                        isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {pub.volume}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-bold font-['Manrope'] leading-snug mb-2 ${
                      isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                    } transition-colors`}
                  >
                    {pub.title}
                  </h3>

                  <p
                    className={`text-sm font-semibold mb-4 ${
                      isDark ? 'text-cyan-400/90' : 'text-cyan-700'
                    }`}
                  >
                    {pub.journal}
                  </p>

                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-6 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {pub.abstract}
                  </p>

                  {/* Explicitly attributed paper metrics */}
                  {pub.reportedMetrics && (
                    <div className="mb-6">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2.5">
                        <Activity size={14} />
                        <span>Experimental Results (As Reported in Paper):</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {pub.reportedMetrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className={`p-3 rounded-xl border text-center ${metricBox}`}
                          >
                            <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                              {metric.value}
                            </div>
                            <div
                              className={`text-xs font-medium mt-0.5 ${
                                isDark ? 'text-slate-300' : 'text-slate-700'
                              }`}
                            >
                              {metric.label}
                            </div>
                            <div
                              className={`text-[10px] italic mt-1 ${
                                isDark ? 'text-slate-500' : 'text-slate-400'
                              }`}
                            >
                              {metric.note}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 items-center">
                    {pub.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${pillShell}`}
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-row lg:flex-col gap-3 shrink-0 pt-2 lg:pt-0">
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-md"
                    >
                      <FileText size={15} />
                      <span>Read Paper (PDF)</span>
                    </a>
                  )}

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${
                        isDark
                          ? 'border-slate-700 bg-slate-800/80 text-slate-200 hover:border-cyan-400 hover:text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-cyan-600 hover:text-slate-900'
                      }`}
                    >
                      <ExternalLink size={14} />
                      <span>DOI: {pub.doiText}</span>
                    </a>
                  )}

                  {!pub.pdfUrl && pub.articleUrl && (
                    <a
                      href={pub.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-md"
                    >
                      <ExternalLink size={15} />
                      <span>View Article</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Research);
