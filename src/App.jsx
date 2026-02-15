import { useEffect, useState, useCallback, memo } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import useWindowSize from "./hooks/useWindowSize";
import SplitText from "./components/SplitText";
import StarBorder from "./components/StarBorder";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact";
import { Linkedin, Github, Youtube, Twitter, Mail } from "lucide-react";

const getInitialTheme = () => {
  if (typeof globalThis.window === 'undefined') {
    return 'dark';
  }
  return globalThis.localStorage?.getItem('theme') || 'dark';
};

const DevToIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
  </svg>
);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vyankateshbairagi/",
    Icon: Linkedin,
    dark: "bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300",
    light: "bg-cyan-100 hover:bg-cyan-200 text-cyan-700",
  },
  {
    label: "GitHub",
    href: "https://github.com/vyankateshbairagi",
    Icon: Github,
    dark: "bg-slate-500/15 hover:bg-slate-500/25 text-slate-200",
    light: "bg-slate-100 hover:bg-slate-200 text-slate-700",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCTU-SuiBxR8_dFcWoj3rEuw",
    Icon: Youtube,
    dark: "bg-rose-500/15 hover:bg-rose-500/25 text-rose-300",
    light: "bg-rose-100 hover:bg-rose-200 text-rose-700",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Vyankatesh_1429",
    Icon: Twitter,
    dark: "bg-sky-500/15 hover:bg-sky-500/25 text-sky-300",
    light: "bg-sky-100 hover:bg-sky-200 text-sky-700",
  },
  {
    label: "Dev.to",
    href: "https://dev.to/vyankateshbairagi",
    Icon: DevToIcon,
    dark: "bg-slate-500/15 hover:bg-slate-500/25 text-slate-200",
    light: "bg-slate-100 hover:bg-slate-200 text-slate-700",
  },
  {
    label: "Email",
    href: "mailto:vyankateshbairagi.dev@gmail.com",
    Icon: Mail,
    dark: "bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300",
    light: "bg-emerald-100 hover:bg-emerald-200 text-emerald-700",
  },
];

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    globalThis.localStorage?.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme(isDark ? "light" : "dark"), [isDark]);

  const handleAnimationComplete = useCallback(() => {
    // Animation complete - no logging in production
  }, []);

  const pageShell = isDark ? "bg-[#0b1120] text-white" : "bg-slate-50 text-slate-900";
  const particleTone = isDark ? "#22d3ee" : "#0ea5e9";

  return (
    <div className={`relative w-full transition-colors duration-500 ${pageShell}`}>
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground
          particleCount={isMobile ? 30 : 60}
          particleColor={particleTone}
          particleSize={2}
          speed={0.3}
          opacity={isDark ? 0.7 : 0.5}
        />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen w-full overflow-hidden px-6 pb-20 pt-32">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="flex flex-col gap-6">
            <span
              className={`w-fit rounded-full border px-4 py-2 text-xs uppercase tracking-[0.35em] ${
                isDark
                  ? "border-cyan-400/30 text-cyan-200 bg-cyan-500/10"
                  : "border-cyan-300 text-cyan-700 bg-cyan-50"
              }`}
            >
              Full-stack MERN Developer
            </span>
            <SplitText
              text="Vyankatesh Bairagi"
              className="text-4xl md:text-6xl font-bold text-left font-['Manrope']"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <p className={`text-lg md:text-xl leading-relaxed ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
              I build fast, reliable web products with clean UI, scalable APIs, and thoughtful UX.
              Focused on React, Node.js, and modern cloud-ready architecture.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  isDark
                    ? "bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                    : "bg-slate-900 text-white hover:bg-cyan-600"
                }`}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className={`rounded-full px-6 py-3 text-sm font-semibold border transition-colors ${
                  isDark
                    ? "border-white/15 text-white hover:border-cyan-300/60"
                    : "border-slate-300 text-slate-700 hover:border-cyan-500"
                }`}
              >
                Contact Me
              </a>
              <StarBorder
                as="a"
                href="https://drive.google.com/file/d/1hHlyXoqETiGvsvnh88Odou5Y6kgKbEEJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-class"
                color="magenta"
                speed="5s"
              >
                Get My Resume
              </StarBorder>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {socialLinks.map(({ label, href, Icon, dark, light }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDark ? dark : light
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/logo.png"
                alt="Vyankatesh Bairagi"
                loading="lazy"
                className="w-full h-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Blogs theme={theme} username="vyankateshbairagi" />
      <Experience theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default memo(App);
