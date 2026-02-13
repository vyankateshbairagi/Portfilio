import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-text", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className={`relative overflow-hidden px-6 py-24 md:py-32 transition-colors duration-500 ${
                isDark ? '' : 'bg-white/80'
            }`}
        >
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <p
                            className={`about-text text-sm md:text-base uppercase tracking-[0.35em] mb-4 ${
                                isDark ? 'text-cyan-300' : 'text-cyan-700'
                            }`}
                        >
                            About Signal
                        </p>

                        <h2
                            className={`about-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Poppins'] ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}
                        >
                            Designing interfaces that feel fast, clear, and alive.
                        </h2>

                        <p
                            className={`about-text mt-6 text-lg md:text-xl leading-relaxed max-w-2xl ${
                                isDark ? 'text-zinc-400' : 'text-slate-600'
                            }`}
                        >
                            I am a Computer Engineering student focused on web development, backend
                            systems, and scalable application design. I work with the MERN stack to
                            ship reliable products, learn rapidly, and build experiences that scale with
                            real users.
                        </p>

                        <div className="about-text mt-8 flex flex-wrap gap-3">
                            {[
                                'Frontend-first',
                                'MERN stack',
                                'API architecture',
                                'Performance-minded',
                            ].map((label) => (
                                <span
                                    key={label}
                                    className={`rounded-full border px-4 py-2 text-sm tracking-wide ${
                                        isDark
                                            ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200'
                                            : 'border-cyan-300 bg-cyan-50 text-cyan-800'
                                    }`}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className={`about-text rounded-3xl border p-8 backdrop-blur-xl ${
                                isDark
                                    ? 'border-white/10 bg-linear-to-br from-white/5 via-white/2 to-transparent'
                                    : 'border-slate-200/70 bg-white/70'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? 'text-zinc-400' : 'text-slate-500'}`}>
                                    Core Metrics
                                </p>
                                <span
                                    className={`text-xs font-semibold ${
                                        isDark ? 'text-cyan-300' : 'text-cyan-700'
                                    }`}
                                >
                                    2026
                                </span>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-6">
                                <div>
                                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        8.70
                                    </p>
                                    <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                                        CGPA
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        5+
                                    </p>
                                    <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                                        Projects
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        3
                                    </p>
                                    <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                                        Domains
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        12+
                                    </p>
                                    <p className={`text-xs uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                                        Experiments
                                    </p>
                                </div>
                            </div>

                            <div className={`mt-8 rounded-2xl border px-5 py-4 ${isDark ? 'border-white/10 bg-black/30' : 'border-slate-200 bg-white/70'}`}>
                                <p className={`text-xs uppercase tracking-[0.2em] ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                                    Current Focus
                                </p>
                                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-600'}`}>
                                    UI polish, API reliability, and performance tuning for production-ready apps.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`absolute -top-8 -right-6 h-32 w-32 rounded-full blur-[70px] ${
                                isDark ? 'bg-cyan-500/30' : 'bg-cyan-300/60'
                            }`}
                        />
                        <div
                            className={`absolute -bottom-10 left-4 h-40 w-40 rounded-full blur-[90px] ${
                                isDark ? 'bg-blue-500/20' : 'bg-blue-200/60'
                            }`}
                        />
                    </div>
                </div>
            </div>

            <div
                className={`absolute inset-0 z-0 pointer-events-none ${
                    isDark
                        ? 'bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_60%)]'
                        : 'bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_60%)]'
                }`}
            />  
        </section>
    );
};

export default About;
