import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from './projects';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const shell = isDark
        ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
        : 'bg-white border-slate-200 hover:border-slate-300 shadow-md';
    const iconWrap = isDark ? 'bg-zinc-800/50' : 'bg-slate-100';
    const linkColor = isDark ? 'text-zinc-500 hover:text-white' : 'text-slate-500 hover:text-slate-900';
    const titleColor = isDark ? 'text-white' : 'text-slate-900';
    const descColor = isDark ? 'text-zinc-400' : 'text-slate-600';
    const pillShell = isDark
        ? 'text-zinc-400 bg-zinc-800/50 border border-zinc-700/50'
        : 'text-slate-600 bg-slate-100 border border-slate-200';

    return (
        <div className={`project-card group relative rounded-2xl overflow-hidden transition-colors duration-300 flex flex-col h-full ${shell}`}>
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/6 to-blue-500/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl ${iconWrap} ${project.color} bg-opacity-10`}>
                        <project.icon size={28} className={project.color} />
                    </div>
                    <div className="flex gap-3">
                        {project.github ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className={`p-2 transition-colors ${linkColor}`}
                            >
                                <Github size={20} />
                            </a>
                        ) : null}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 transition-colors ${linkColor}`}
                        >
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <h3 className={`text-2xl font-bold mb-3 transition-colors ${titleColor} group-hover:text-cyan-400`}>
                    {project.title}
                </h3>

                <p className={`${descColor} mb-6 leading-relaxed grow`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full ${pillShell}`}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
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
            id="projects"
            ref={containerRef}
            className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${
                isDark ? '' : 'bg-white/80'
            }`}
        >
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-['Manrope'] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Featured <span className={isDark ? 'text-cyan-300' : 'text-cyan-600'}>Projects</span>
                    </h2>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-slate-600'} max-w-xl mx-auto`}>
                        A selection of projects that showcase my ability to solve problems and build end-to-end solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} theme={theme} />
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

export default memo(Projects);
