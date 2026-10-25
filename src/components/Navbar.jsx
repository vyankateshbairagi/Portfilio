import React, { useState, useEffect, memo } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  FileText,
  ExternalLink,
  Home,
  User,
  Briefcase,
  FolderGit2,
  BookOpen,
  GraduationCap,
  Wrench,
  Mail
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Research', href: '#research', icon: BookOpen },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail }
];

const Navbar = ({ theme = 'dark', onToggleTheme = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'experience', 'projects', 'research', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
            return;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navBg = isDark
    ? isScrolled
      ? 'bg-slate-950/85 border-slate-800/80 shadow-2xl shadow-cyan-950/20'
      : 'bg-slate-950/60 border-slate-800/50'
    : isScrolled
    ? 'bg-white/90 border-slate-200/90 shadow-xl shadow-slate-200/50'
    : 'bg-white/75 border-slate-200/60';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 ${
        isScrolled ? 'pt-2.5 pb-2.5' : 'pt-4 pb-3.5'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl border backdrop-blur-xl px-5 sm:px-7 py-3 transition-all duration-300 flex items-center justify-between ${navBg}`}
      >
        {/* Monogram / Brand */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          aria-label="Vyankatesh Bairagi Portfolio Home"
        >
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl font-mono font-bold text-sm sm:text-base flex items-center justify-center transition-all duration-300 shadow-sm ${
              isDark
                ? 'bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-cyan-500/25 group-hover:shadow-lg'
                : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white group-hover:shadow-md group-hover:scale-105'
            }`}
          >
            VB
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold tracking-tight text-base sm:text-lg lg:text-xl leading-tight font-['Plus_Jakarta_Sans',sans-serif] ${
                isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
              } transition-colors`}
            >
              Vyankatesh Bairagi
            </span>
            <span
              className={`text-xs sm:text-[13px] font-mono tracking-wider font-medium ${
                isDark ? 'text-cyan-400/80' : 'text-cyan-700'
              }`}
            >
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-1.5"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection.toLowerCase() === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                      : 'bg-cyan-50 text-cyan-800 border border-cyan-200 shadow-xs'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA and Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* View Resume Action */}
          <a
            href="https://drive.google.com/file/d/1tMUo6QQLVC35D9_N73-UymSlpESYNnxQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 border ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400/60 shadow-xs shadow-cyan-500/10'
                : 'bg-cyan-50 border-cyan-200 text-cyan-800 hover:bg-cyan-100 shadow-xs'
            }`}
            title="View Official Resume (Google Drive)"
            aria-label="View Official Resume (Google Drive)"
          >
            <FileText size={16} className="text-cyan-400" />
            <span>Resume</span>
            <ExternalLink size={13} className="opacity-70" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            type="button"
            className={`p-2.5 rounded-xl border transition-all duration-200 ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-amber-300 hover:bg-slate-800 hover:border-slate-700'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`xl:hidden p-2.5 rounded-xl border transition-all duration-200 ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className={`xl:hidden fixed inset-x-4 top-[78px] rounded-2xl border p-5 backdrop-blur-2xl shadow-2xl transition-all duration-300 max-h-[82vh] overflow-y-auto ${
            isDark
              ? 'bg-slate-950/95 border-slate-800 text-white shadow-cyan-950/40'
              : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/60'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection.toLowerCase() === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? isDark
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                      : isDark
                      ? 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-cyan-400' : 'opacity-70'} />
                  <span>{item.name}</span>
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-800/40 flex flex-col gap-2">
              <a
                href="https://drive.google.com/file/d/1tMUo6QQLVC35D9_N73-UymSlpESYNnxQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2.5 py-3 rounded-xl text-base font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-md"
              >
                <FileText size={18} />
                <span>View Resume</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default memo(Navbar);
