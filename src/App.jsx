import { useEffect, useState, useCallback, memo } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import useWindowSize from "./hooks/useWindowSize";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Research from "./components/Research/Research.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer.jsx";
import {
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowRight,
  Briefcase,
  BookOpen,
  MapPin,
  ChevronDown
} from "lucide-react";

const getInitialTheme = () => {
  if (typeof globalThis.window === "undefined") {
    return "dark";
  }
  return globalThis.localStorage?.getItem("theme") || "dark";
};

const DevToIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
  </svg>
);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vyankateshbairagi",
    Icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/vyankateshbairagi",
    Icon: Github
  },
  {
    label: "Dev.to",
    href: "https://dev.to/vyankateshbairagi",
    Icon: DevToIcon
  },
  {
    label: "Email",
    href: "mailto:vyankateshbairagi.dev@gmail.com",
    Icon: Mail
  }
];

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    globalThis.localStorage?.setItem("theme", theme);
  }, [theme, isDark]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const pageShell = isDark
    ? "bg-mesh-dark bg-grid-subtle-dark text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200"
    : "bg-mesh-light bg-grid-subtle-light text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-900";
  const particleTone = isDark ? "#22d3ee" : "#0ea5e9";

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-500 font-['Plus_Jakarta_Sans','Manrope',sans-serif] ${pageShell}`}>
      {/* Background Particle Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <ParticleBackground
          particleCount={isMobile ? 25 : 55}
          particleColor={particleTone}
          particleSize={1.8}
          speed={0.25}
          opacity={isDark ? 0.6 : 0.35}
        />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          className={`absolute -top-32 left-1/4 w-[36rem] h-[36rem] rounded-full blur-[140px] transition-all duration-1000 ${
            isDark ? "bg-cyan-500/12" : "bg-cyan-400/10"
          }`}
        />
        <div
          className={`absolute top-1/3 -right-20 w-[40rem] h-[40rem] rounded-full blur-[160px] transition-all duration-1000 ${
            isDark ? "bg-indigo-600/12" : "bg-blue-400/10"
          }`}
        />
        <div
          className={`absolute bottom-20 left-10 w-[30rem] h-[30rem] rounded-full blur-[140px] transition-all duration-1000 ${
            isDark ? "bg-sky-500/10" : "bg-sky-300/10"
          }`}
        />
      </div>

      {/* Navigation */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 min-h-screen w-full flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-24 sm:pt-28 pb-4 sm:pb-6"
      >
        {/* Main Content Centered in Available Viewport */}
        <div className="max-w-5xl xl:max-w-6xl mx-auto w-full flex-1 flex items-center py-3 sm:py-5">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1.22fr_0.78fr] gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Content Column */}
            <div className="flex flex-col items-start gap-3 sm:gap-3.5 lg:gap-4">
              {/* Status and Location Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-md shadow-sm ${
                    isDark
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : "bg-emerald-50 border-emerald-200 text-emerald-800"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Full-Time SWE Roles</span>
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full text-xs font-mono border backdrop-blur-md shadow-sm ${
                    isDark
                      ? "bg-slate-900/80 border-slate-700/70 text-slate-300"
                      : "bg-white/80 border-slate-200 text-slate-700"
                  }`}
                >
                  <MapPin size={13} className="text-cyan-400" />
                  <span>Maharashtra, India</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-extrabold tracking-tight leading-[1.18]">
                Building{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Scalable Web Applications
                </span>{" "}
                & Intelligent Digital Products.
              </h1>

              {/* Supporting Introduction */}
              <p
                className={`text-sm sm:text-[15px] lg:text-base leading-relaxed max-w-xl font-normal ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                I'm <strong className="font-semibold text-cyan-400">Vyankatesh Bairagi</strong>, a Computer Engineering graduate and Full Stack Developer focused on React, Next.js, TypeScript, backend systems, and AI-powered applications. I build fast, reliable, recruiter-ready software.
              </p>

              {/* Verified Context Accent Bar */}
              <div
                className={`flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border text-xs sm:text-[13px] font-mono backdrop-blur-md shadow-sm ${
                  isDark
                    ? "bg-slate-900/60 border-cyan-500/20 text-slate-300"
                    : "bg-white/85 border-slate-200 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-cyan-400 shrink-0" />
                  <span>Web Dev Intern @ ThinkBuild</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={14} className="text-cyan-400 shrink-0" />
                  <span>Published Researcher (IJASRET & IJARSCT)</span>
                </div>
              </div>

              {/* Unified Action & Social Links Row */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="/Vyankatesh_Bairagi_CV.pdf"
                  download="Vyankatesh_Bairagi_CV.pdf"
                  className={`inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-sm font-semibold border backdrop-blur-md transition-all hover:-translate-y-0.5 ${
                    isDark
                      ? "bg-slate-900/80 border-slate-700/80 text-slate-200 hover:border-cyan-400/60 hover:text-white hover:bg-slate-800/80 shadow-md"
                      : "bg-white/90 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  <Download size={16} className="text-cyan-400" />
                  <span>Resume</span>
                </a>

                <a
                  href="#contact"
                  className={`px-3 py-2 text-sm font-semibold transition-colors hover:underline ${
                    isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Contact Me
                </a>

                <div className="h-5 w-px bg-slate-700/60 mx-0.5 hidden sm:block" />

                {/* Social Icons Inline */}
                <div className="flex items-center gap-1.5">
                  {socialLinks.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                          isDark
                            ? "border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:text-cyan-700 hover:border-cyan-500 shadow-sm"
                        }`}
                        aria-label={item.label}
                        title={item.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Professional Headshot with Floating Tech Badges */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Back ambient radial glow */}
                <div
                  className={`absolute -inset-4 sm:-inset-6 rounded-3xl blur-2xl sm:blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700 pointer-events-none ${
                    isDark
                      ? "bg-gradient-to-tr from-cyan-500/30 via-sky-500/20 to-blue-600/30"
                      : "bg-gradient-to-tr from-cyan-400/20 via-sky-300/20 to-blue-400/20"
                  }`}
                  aria-hidden="true"
                />

                {/* Floating Tech Chip 1 - Top Right */}
                <div
                  className={`hidden sm:flex absolute -top-3 -right-3 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5 ${
                    isDark
                      ? "bg-slate-900/95 border-cyan-500/30 text-cyan-300 shadow-cyan-950/50"
                      : "bg-white/95 border-cyan-300 text-cyan-800 shadow-slate-200"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>React • Next.js • TS</span>
                </div>

                {/* Floating Tech Chip 2 - Bottom Left */}
                <div
                  className={`hidden sm:flex absolute -bottom-3 -left-3 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:translate-y-0.5 ${
                    isDark
                      ? "bg-slate-900/95 border-blue-500/30 text-blue-300 shadow-blue-950/50"
                      : "bg-white/95 border-blue-300 text-blue-800 shadow-slate-200"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Node.js • FastAPI • AI Apps</span>
                </div>

                {/* Sculpted Professional Frame */}
                <div
                  className={`relative rounded-3xl p-1.5 sm:p-2 border transition-all duration-500 ${
                    isDark
                      ? "bg-slate-900/60 border-slate-700/60 shadow-2xl shadow-cyan-950/40 group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10"
                      : "bg-white/90 border-slate-200 shadow-xl shadow-slate-200/60 group-hover:border-slate-300"
                  }`}
                >
                  <div className="w-52 sm:w-60 md:w-64 lg:w-68 xl:w-76 aspect-[4/4.8] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-inner">
                    <img
                      src="/vyankatesh.jpg"
                      alt="Vyankatesh Bairagi - Software Engineer"
                      width={512}
                      height={614}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                      fetchPriority="high"
                    />

                    {/* Integrated Glass Identity Pill */}
                    <div className="absolute inset-x-0 bottom-0 pt-8 pb-2.5 px-3.5 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent flex items-center justify-between text-white rounded-b-2xl sm:rounded-b-3xl">
                      <div className="flex flex-col text-left">
                        <span className="text-xs sm:text-sm font-bold tracking-tight text-white drop-shadow-sm">
                          Vyankatesh Bairagi
                        </span>
                        <span className="text-[11px] sm:text-xs font-mono text-cyan-300">
                          Software Engineer (B.E.)
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] sm:text-[11px] font-mono text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Viewport Bottom Row with Subtle Indicator */}
        <div className="shrink-0 max-w-5xl xl:max-w-6xl mx-auto w-full flex items-center justify-between pt-3 pb-2 border-t border-slate-800/30 text-xs font-mono">
          <span className={isDark ? "text-slate-500" : "text-slate-400"}>
            Full Stack Developer & Systems Engineer
          </span>
          <a
            href="#about"
            className={`inline-flex items-center gap-1.5 transition-colors hover:text-cyan-400 ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <span>Scroll to explore</span>
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </div>
      </section>

      {/* Main Sections */}
      <About theme={theme} />
      <Experience theme={theme} />
      <Projects theme={theme} />
      <Research theme={theme} />
      <Skills theme={theme} />
      <Education theme={theme} />
      <Blogs theme={theme} username="vyankateshbairagi" />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default memo(App);
