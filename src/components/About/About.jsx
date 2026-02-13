import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getAboutPalette = (isDark) => ({
    sectionBg: isDark ? '' : 'bg-white/80',
    kicker: isDark ? 'text-cyan-300' : 'text-cyan-700',
    title: isDark ? 'text-white' : 'text-slate-900',
    body: isDark ? 'text-zinc-400' : 'text-slate-600',
    pill: isDark
        ? 'border-cyan-400/30 bg-cyan-500/10 text-cyan-200'
        : 'border-cyan-300 bg-cyan-50 text-cyan-800',
    card: isDark
        ? 'border-white/10 bg-linear-to-br from-white/5 via-white/2 to-transparent'
        : 'border-slate-200/70 bg-white/70',
    meta: isDark ? 'text-zinc-400' : 'text-slate-500',
    metric: isDark ? 'text-white' : 'text-slate-900',
    metricLabel: isDark ? 'text-zinc-500' : 'text-slate-500',
    focusCard: isDark ? 'border-white/10 bg-black/30' : 'border-slate-200 bg-white/70',
    focusText: isDark ? 'text-zinc-300' : 'text-slate-600',
    glowOne: isDark ? 'bg-cyan-500/30' : 'bg-cyan-300/60',
    glowTwo: isDark ? 'bg-blue-500/20' : 'bg-blue-200/60',
    background: isDark
        ? 'bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_60%)]'
        : 'bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_60%)]',
});

const About = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);
    const palette = getAboutPalette(isDark);
    const highlights = [
        'Frontend-first',
        'MERN stack',
        'API architecture',
        'Performance-minded',
    ];
    const metrics = [
        { value: '8.70', label: 'CGPA' },
        { value: '5+', label: 'Projects' },
        { value: '3', label: 'Domains' },
        { value: '12+', label: 'Experiments' },
    ];

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
                palette.sectionBg
            }`}
        >
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <p
                            className={`about-text text-sm md:text-base uppercase tracking-[0.35em] mb-4 ${
                                palette.kicker
                            }`}
                        >
                            About
                        </p>

                        <h2
                            className={`about-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-['Manrope'] ${
                                palette.title
                            }`}
                        >
                            Designing interfaces that feel fast, clear, and alive.
                        </h2>

                        <p
                            className={`about-text mt-6 text-lg md:text-xl leading-relaxed max-w-2xl ${
                                palette.body
                            }`}
                        >
                            I am a Computer Engineering student focused on web development, backend
                            systems, and scalable application design. I work with the MERN stack to
                            ship reliable products, learn rapidly, and build experiences that scale with
                            real users.
                        </p>

                        <div className="about-text mt-8 flex flex-wrap gap-3">
                            {highlights.map((label) => (
                                <span
                                    key={label}
                                    className={`rounded-full border px-4 py-2 text-sm tracking-wide ${
                                        palette.pill
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
                                palette.card
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <p className={`text-xs uppercase tracking-[0.25em] ${palette.meta}`}>
                                    Core Metrics
                                </p>
                                <span
                                    className={`text-xs font-semibold ${palette.kicker}`}
                                >
                                    2026
                                </span>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-6">
                                {metrics.map((metric) => (
                                    <div key={metric.label}>
                                        <p className={`text-3xl font-bold ${palette.metric}`}>
                                            {metric.value}
                                        </p>
                                        <p className={`text-xs uppercase tracking-widest ${palette.metricLabel}`}>
                                            {metric.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className={`mt-8 rounded-2xl border px-5 py-4 ${palette.focusCard}`}>
                                <p className={`text-xs uppercase tracking-[0.2em] ${palette.metricLabel}`}>
                                    Current Focus
                                </p>
                                <p className={`mt-2 text-sm leading-relaxed ${palette.focusText}`}>
                                    UI polish, API reliability, and performance tuning for production-ready apps.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`absolute -top-8 -right-6 h-32 w-32 rounded-full blur-[70px] ${
                                palette.glowOne
                            }`}
                        />
                        <div
                            className={`absolute -bottom-10 left-4 h-40 w-40 rounded-full blur-[90px] ${
                                palette.glowTwo
                            }`}
                        />
                    </div>
                </div>
            </div>

            <div
                className={`absolute inset-0 z-0 pointer-events-none ${
                    palette.background
                }`}
            />  
        </section>
    );
};

export default About;
