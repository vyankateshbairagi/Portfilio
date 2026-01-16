import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/Logo.png';
import { Menu, X, Sun, Moon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ theme = 'dark', onToggleTheme = () => {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef(null);
    const linksRef = useRef([]);
    const underlineRef = useRef(null);
    const isDark = theme === 'dark';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 50);
            const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
                        return;
                    }
                }
            }
            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        // Scroll Animation
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                y: isScrolling ? -10 : 0,
                scale: isScrolling ? 0.95 : 1,
                duration: 0.4,
                ease: "power2.out",
            });
        }

        if (isOpen) {
            gsap.to(containerRef.current, {
                height: 'auto',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.fromTo(
                linksRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, delay: 0.15 }
            );
        } else {
            gsap.to(containerRef.current, {
                height: '70px',
                duration: 0.4,
                ease: 'power2.in',
            });
        }
    }, [isOpen, isScrolling]);

    const navShell = isDark
        ? 'border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-xl text-white shadow-2xl shadow-black/20'
        : 'border-white/40 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-xl text-slate-900 shadow-2xl shadow-black/10';

    const linkBase = isDark
        ? 'text-gray-400 hover:text-white'
        : 'text-slate-600 hover:text-slate-900';
    const linkActive = isDark ? 'text-white' : 'text-slate-900';

    const themeButtonStyle = isDark
        ? 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border-white/20'
        : 'bg-black/5 hover:bg-black/10 text-slate-700 hover:text-slate-900 border-black/10';

    return (
        <nav
            ref={containerRef}
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-[95%] sm:w-[90%] max-w-[700px] rounded-full border px-6 py-4 overflow-hidden h-[70px] transition-all duration-300 ${navShell}`}
            style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
        >
            <div className="flex items-center justify-between h-[46px]">
                {/* Logo Section */}
                <div
                    className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300 active:scale-95"
                    onClick={scrollToTop}
                >
                    <div className="relative">
                        <img src={logo} alt="Logo" className="h-7 w-auto object-contain select-none drop-shadow-lg" />
                    </div>
                </div>

                {/* Desktop Links Section */}
                <div className="hidden md:flex items-center gap-8">
                    {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer ${
                                activeSection === item ? linkActive : linkBase
                            }`}
                        >
                            {item}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                                    isDark
                                        ? activeSection === item
                                            ? 'w-full bg-gradient-to-r from-blue-400 to-cyan-400'
                                            : 'w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-cyan-400'
                                        : activeSection === item
                                        ? 'w-full bg-gradient-to-r from-blue-600 to-blue-500'
                                        : 'w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-blue-500'
                                }`}
                            ></span>
                        </a>
                    ))}
                </div>

                {/* Right Section - Theme Toggle & Menu */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle Button - Icon Only */}
                    <button
                        onClick={onToggleTheme}
                        aria-label="Toggle theme"
                        className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border ${themeButtonStyle}`}
                    >
                        {isDark ? (
                            <Sun size={20} className="transition-transform duration-300 rotate-0 hover:rotate-180" />
                        ) : (
                            <Moon size={20} className="transition-transform duration-300 rotate-0 hover:rotate-180" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 border ${
                                isDark
                                    ? 'text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 border-white/20'
                                    : 'text-slate-700 hover:text-slate-900 bg-black/5 hover:bg-black/10 border-black/10'
                            }`}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Links Section */}
            <div className={`md:hidden flex flex-col gap-2 pb-2 mt-4 ${isOpen ? 'block' : 'hidden'}`}>
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                    <a
                        key={item}
                        ref={(el) => (linksRef.current[index] = el)}
                        href={`#${item.toLowerCase()}`}
                        className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg opacity-0 ${
                            activeSection === item
                                ? isDark
                                    ? 'bg-white/10 text-white'
                                    : 'bg-black/5 text-slate-900'
                                : isDark
                                ? 'hover:bg-white/5 text-gray-400 hover:text-white'
                                : 'hover:bg-black/5 text-slate-600 hover:text-slate-900'
                        }`}
                        onClick={toggleMenu}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
