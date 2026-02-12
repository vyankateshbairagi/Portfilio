import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from './skills';

gsap.registerPlugin(ScrollTrigger);

const SkillCategory = ({ title, items, theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const cardShell = isDark
        ? 'bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/50'
        : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300';
    const tileBg = isDark ? 'bg-black/20 hover:bg-zinc-800/30' : 'bg-slate-50 hover:bg-slate-100';
    const titleColor = isDark ? 'text-zinc-300' : 'text-slate-700';
    const textColor = isDark ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-slate-600 group-hover:text-slate-800';

    return (
        <div className={`skill-category min-w-[280px] flex-1 rounded-2xl p-6 transition-colors duration-300 ${cardShell}`}>
            <h3 className={`text-lg font-semibold mb-6 flex items-center gap-2 ${titleColor}`}>
                {title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {items.map((skill, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col gap-2 p-3 rounded-xl transition-all duration-300 group ${tileBg}`}
                    >
                        <skill.icon size={28} className={`${skill.color} mb-1 transition-transform group-hover:scale-110 duration-300`} />
                        <span className={`text-sm font-medium transition-colors ${textColor}`}>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-category", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="skills"
            ref={containerRef}
            className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
                isDark ? '' : 'bg-slate-50'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-['Poppins'] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Technical <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>Stack</span>
                    </h2>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
                        A curated set of tools and technologies I use to build scalable, high-performance applications.
                    </p>
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                    <SkillCategory title="Languages" items={skills.languages} theme={theme} />
                    <SkillCategory title="Frontend" items={skills.frontend} theme={theme} />
                    <SkillCategory title="Backend" items={skills.backend} theme={theme} />
                    <SkillCategory title="Database" items={skills.database} theme={theme} />
                    <SkillCategory title="Core Competencies" items={skills.coreCompetencies} theme={theme} />
                    <SkillCategory title="Tools & Cloud" items={skills.tools} theme={theme} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
