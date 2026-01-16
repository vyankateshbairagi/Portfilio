import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-content", {
                y: 30,
                opacity: 0,
                duration: 1,
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
            id="contact"
            ref={containerRef}
            className={`py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500 ${
                isDark ? 'bg-black' : 'bg-white'
            }`}
        >
            {/* Background Gradient */}
            <div
                className={`absolute inset-0 pointer-events-none ${
                    isDark
                        ? 'bg-gradient-to-t from-zinc-900 via-black to-black'
                        : 'bg-gradient-to-t from-slate-200 via-white to-white'
                }`}
            ></div>

            <div className="contact-content max-w-3xl mx-auto text-center relative z-10">
                <h2
                    className={`text-4xl md:text-6xl font-bold mb-8 font-['Poppins'] tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}
                >
                    Let's Build Something <br />
                    <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>Extraordinary.</span>
                </h2>

                <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:vyankateshbairagi.dev@gmail.com"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 group ${
                        isDark
                            ? 'bg-white text-black hover:bg-cyan-400'
                            : 'bg-slate-900 text-white hover:bg-cyan-500'
                    }`}
                >
                    Say Hello
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-16 flex justify-center gap-8">
                    <a
                        href="https://github.com/vyankateshbairagi"
                        className={`transition-colors duration-300 ${isDark ? 'text-zinc-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/vyankateshbairagi"
                        className={`transition-colors duration-300 ${isDark ? 'text-zinc-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:vyankateshbairagi.dev@gmail.com"
                        className={`transition-colors duration-300 ${isDark ? 'text-zinc-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                <div className={`mt-24 text-sm ${isDark ? 'text-zinc-600' : 'text-slate-500'}`}>
                    <p>© 2026 Vyankatesh Bairagi. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
