import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../SplitText'; // Assuming SplitText is in components root or I need to check where it is

gsap.registerPlugin(ScrollTrigger);

const About = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);
    const textRef = useRef(null);

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
            className={`min-h-[80vh] flex flex-col justify-center items-center pt-40 pb-20 px-6 relative transition-colors duration-500 ${
                isDark ? '' : 'bg-white/80'
            }`}
        >
            <div className="max-w-4xl mx-auto text-center z-10">
                <h2
                    className={`about-text text-xl md:text-2xl font-semibold mb-6 tracking-wide uppercase ${
                        isDark ? 'text-cyan-400' : 'text-cyan-600'
                    }`}
                >
                    Who I Am
                </h2>

                <h3
                    className={`about-text text-4xl md:text-5xl font-bold mb-8 leading-tight font-['Poppins'] ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}
                >
                    Building Scalable <br />
                    <span className={isDark ? 'text-zinc-500' : 'text-slate-500'}>Digital Experiences.</span>
                </h3>

                <p
                    className={`about-text text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 ${
                        isDark ? 'text-zinc-400' : 'text-slate-600'
                    }`}
                >
                    I am a driven Computer Engineering student with a passion for web development,
                    backend systems, and scalable application design. Committed to delivering
                    high-quality solutions with a strong foundation in the <span className="text-white">MERN stack</span>,
                    learning new technologies rapidly, and growing into a versatile software professional
                    capable of contributing to multiple domains. 
                </p>

                <div className="about-text flex justify-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>8.48</span>
                        <span className={`text-sm uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>CGPA</span>
                    </div>
                    <div className={`w-px h-12 ${isDark ? 'bg-zinc-800' : 'bg-slate-200'}`}></div>
                    <div className="flex flex-col items-center gap-2">
                        <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>5+</span>
                        <span className={`text-sm uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>Projects</span>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div
                className={`absolute top-1/2 left-10 w-64 h-64 rounded-full blur-[120px] pointer-events-none ${
                    isDark ? 'bg-cyan-900/10' : 'bg-cyan-200/60'
                }`}
            ></div>
            <div
                className={`absolute bottom-10 right-10 w-64 h-64 rounded-full blur-[120px] pointer-events-none ${
                    isDark ? 'bg-purple-900/10' : 'bg-purple-200/50'
                }`}
            ></div>
        </section>
    );
};

export default About;
