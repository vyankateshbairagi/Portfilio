 import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/Logo.png';
import { Menu, X, Sun, Moon, Home, Users, Briefcase, Award, Mail, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const navItems = [
    { name: 'About', icon: Users, href: '#about' },
    { name: 'Skills', icon: Award, href: '#skills' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Contact', icon: Mail, href: '#contact' }
];

const Navbar = ({ theme = 'dark', onToggleTheme = () => {} }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const containerRef = useRef(null);
    const linksRef = useRef([]);
    const isDark = theme === 'dark';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 200;
            setScrolled(window.scrollY > 50);

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
        if (isOpen) {
            gsap.to(containerRef.current, {
                height: 'auto',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.fromTo(
                linksRef.current,
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.3, stagger: 0.08, delay: 0.1 }
            );
        } else {
            gsap.to(containerRef.current, {
                height: '60px',
                duration: 0.4,
                ease: 'power2.in',
            });
        }
    }, [isOpen]);

    const navShell = isDark
        ? `border border-white/5 bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-xl text-white shadow-2xl ${scrolled ? 'shadow-black/40' : ''}`
        : `border border-slate-200/50 bg-gradient-to-br from-white/90 via-slate-50/80 to-white/70 backdrop-blur-xl text-slate-900 shadow-xl ${scrolled ? 'shadow-slate-200/50' : ''}`;

    const linkBase = isDark 
        ? 'text-gray-300 hover:text-white hover:bg-white/5' 
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50';
    
    const linkActive = isDark 
        ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-b-2 border-blue-500' 
        : 'text-slate-900 bg-slate-100/60 border-b-2 border-blue-500';

    const iconButton = isDark 
        ? 'text-gray-400 hover:text-white hover:bg-white/10' 
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100';

    return (
        <nav
            ref={containerRef}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-[1200px] rounded-2xl' : 'top-0 w-full rounded-none'} border px-6 py-3 overflow-hidden h-[60px] ${navShell}`}
        >
            <div className="flex items-center justify-between h-full">
                {/* Logo Section */}
                <div 
                    className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105" 
                    onClick={scrollToTop}
                >
                    <div className={`${isDark ? 'bg-white/10' : 'bg-slate-100/50'} p-2 rounded-lg backdrop-blur-sm`}>
                        <img src={logo} alt="Logo" className="h-5 w-auto object-contain select-none" />
                    </div>
                    <span className={`hidden sm:block text-sm font-bold bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                    VYANKATESH
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.name;
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    isActive 
                                        ? linkActive + ' scale-105' 
                                        : linkBase + ' hover:scale-105'
                                }`}
                            >
                                <Icon size={16} />
                                <span>{item.name}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Right Section - Theme Toggle & Mobile Menu */}
                <div className="flex items-center gap-3">
                    {/* Desktop Theme Toggle (icon only) */}
                    <button
                        onClick={onToggleTheme}
                        aria-label="Toggle theme"
                        className={`hidden sm:flex items-center justify-center rounded-lg px-3 py-2 transition-all duration-300 ${
                            isDark
                                ? 'bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40'
                                : 'bg-slate-100/50 border border-slate-200/50 hover:bg-slate-100 hover:border-slate-300'
                        } backdrop-blur-sm`}
                    >
                        {isDark ? (
                            <Sun size={18} className="transition-transform duration-300" />
                        ) : (
                            <Moon size={18} className="transition-transform duration-300" />
                        )}
                        <span className="sr-only">Switch theme</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu} 
                        className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${iconButton} backdrop-blur-sm ${isDark ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden mt-4 flex flex-col gap-2 pb-4 border-t border-white/10 pt-4">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.name;
                        return (
                            <a
                                key={item.name}
                                ref={(el) => (linksRef.current[index] = el)}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 opacity-0 ${
                                    isActive 
                                        ? linkActive 
                                        : linkBase
                                }`}
                                onClick={toggleMenu}
                            >
                                <Icon size={18} />
                                <span>{item.name}</span>
                            </a>
                        );
                    })}
                    
                    {/* Mobile Theme Toggle (icon only) */}
                    <button
                        onClick={() => { onToggleTheme(); toggleMenu(); }}
                        className={`flex items-center justify-center rounded-lg px-4 py-3 transition-all duration-300 mt-2 border-t border-white/10 pt-3 ${
                            isDark
                                ? 'bg-white/5 hover:bg-white/10'
                                : 'bg-slate-100/30 hover:bg-slate-100/50'
                        }`}
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        <span className="sr-only">Switch theme</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
