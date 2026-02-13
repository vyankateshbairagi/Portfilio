import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from './experience';

gsap.registerPlugin(ScrollTrigger);

const ExperienceItem = ({ role, company, period, description, skills, theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const borderColor = isDark ? 'border-zinc-800 hover:border-cyan-500/50' : 'border-slate-200 hover:border-cyan-300/70';
    const dotColor = isDark ? 'bg-zinc-800 shadow-[0_0_0_4px_rgba(0,0,0,1)]' : 'bg-slate-300 shadow-[0_0_0_4px_rgba(255,255,255,0.8)]';
    const titleColor = isDark ? 'text-white' : 'text-slate-900';
    const metaColor = isDark ? 'text-zinc-500' : 'text-slate-500';
    const companyColor = isDark ? 'text-zinc-400' : 'text-slate-600';
    const descColor = isDark ? 'text-zinc-400' : 'text-slate-600';
    const pillShell = isDark
        ? 'bg-zinc-900 text-zinc-500 border border-zinc-800 group-hover:border-zinc-700'
        : 'bg-slate-100 text-slate-600 border border-slate-200 group-hover:border-slate-300';

    return (
        <div className={`experience-item relative pl-8 md:pl-12 py-6 border-l w-full transition-colors duration-300 group ${borderColor}`}>
            <div className={`absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full transition-colors duration-300 ${dotColor} group-hover:bg-cyan-400`}></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className={`text-xl font-bold transition-colors ${titleColor} group-hover:text-cyan-400`}>{role}</h3>
                <span className={`text-sm font-mono mt-1 sm:mt-0 ${metaColor}`}>{period}</span>
            </div>

            <h4 className={`text-lg font-medium mb-4 ${companyColor}`}>{company}</h4>

            <p className={`${descColor} leading-relaxed mb-4 max-w-3xl`}>
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                    <span key={idx} className={`text-xs px-2 py-1 rounded transition-colors ${pillShell}`}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Experience = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".experience-item", {
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out",
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
            id="experience"
            ref={containerRef}
            className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
                isDark ? '' : 'bg-white/80'
            }`}
        >
            <div className="max-w-6xl mx-auto relative z-10">
                <h2
                    className={`text-3xl md:text-4xl font-extrabold mb-12 font-['Manrope'] text-center tracking-tight drop-shadow-sm ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}
                >
                    Professional <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>Journey</span>
                </h2>

                <div className="flex flex-col relative">
                    {experience.map((exp) => (
                        <ExperienceItem key={exp.id} {...exp} theme={theme} />
                    ))}
                </div>
            </div>
            <div
                className={`absolute inset-0 z-0 pointer-events-none ${
                    isDark
                        ? 'bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_60%)]'
                        : 'bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.15),transparent_60%)]'
                }`}
            />
        </section>
    );
};

export default Experience;
