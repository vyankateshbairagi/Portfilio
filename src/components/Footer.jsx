import React, { memo } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const DevToIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
  </svg>
);

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vyankateshbairagi',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vyankateshbairagi',
    icon: Github,
  },
  {
    name: 'Dev.to',
    href: 'https://dev.to/vyankateshbairagi',
    icon: DevToIcon,
  },
  {
    name: 'Email',
    href: 'mailto:vyankateshbairagi.dev@gmail.com',
    icon: Mail,
  },
];

const Footer = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative z-10 border-t transition-colors duration-500 ${
        isDark
          ? 'border-slate-800/80 bg-slate-950/80 text-slate-400'
          : 'border-slate-200 bg-white/90 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Positioning */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl font-mono font-bold text-xs flex items-center justify-center border shadow-sm ${
                  isDark
                    ? 'bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-indigo-500/20 text-cyan-300 border-cyan-500/30'
                    : 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-transparent'
                }`}
              >
                VB
              </div>
              <div>
                <span
                  className={`font-bold tracking-tight text-base font-['Plus_Jakarta_Sans',sans-serif] ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Vyankatesh Bairagi
                </span>
                <p className="text-xs font-mono text-cyan-400">
                  Software Engineer & Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Computer Engineering graduate specialized in React, Next.js, TypeScript, Node.js, and AI-powered web applications.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-slate-500">
              <Code2 size={13} className="text-cyan-400" />
              <span>Built with React 19 • Tailwind CSS • Vite</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4
              className={`text-xs uppercase font-mono tracking-wider font-semibold ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back to Top */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <h4
              className={`text-xs uppercase font-mono tracking-wider font-semibold ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Connect
            </h4>
            <div className="flex items-center md:justify-end gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`p-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                      isDark
                        ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800'
                        : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-700 hover:border-cyan-500 hover:bg-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <span>Back to Top</span>
                <ArrowUp size={13} className="text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} Vyankatesh Bairagi. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with clean code & precision</span>
            <Heart size={12} className="text-red-400 fill-red-400/30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
