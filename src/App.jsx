import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import useWindowSize from "./hooks/useWindowSize";
import SplitText from "./components/SplitText";
import TextType from "./components/TextType";
import StarBorder from "./components/StarBorder";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact";
import { Linkedin, Github, Youtube, Twitter, Mail } from "lucide-react";

function App() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark"
  );
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div
      className={`relative w-full transition-colors duration-500 ${
        isDark ? "bg-[#0a1628] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground
          particleCount={isMobile ? 30 : 60}
          particleColor={isDark ? "#4a90e2" : "#0ea5e9"}
          particleSize={2}
          speed={0.3}
          opacity={isDark ? 0.7 : 0.5}
        />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 w-full">
          <SplitText
            text="Vyankatesh Bairagi"
            className="text-4xl md:text-6xl font-bold text-center font-['Poppins']"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
            <div className="text-xl md:text-2xl font-semibold text-center font-['Poppins'] mt-4">
              Frontend-focused MERN Developer
            </div>
            
            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 px-4 max-w-md mx-auto">
              <a
                href="https://www.linkedin.com/in/vyankateshbairagi/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark ? "bg-blue-600/20 hover:bg-blue-600/30" : "bg-blue-100 hover:bg-blue-200"
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
              </a>
              <a
                href="https://github.com/vyankateshbairagi"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark ? "bg-gray-600/20 hover:bg-gray-600/30" : "bg-gray-100 hover:bg-gray-200"
                }`}
                aria-label="GitHub"
              >
                <Github className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-gray-300" : "text-gray-700"}`} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTU-SuiBxR8_dFcWoj3rEuw"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark ? "bg-red-600/20 hover:bg-red-600/30" : "bg-red-100 hover:bg-red-200"
                }`}
                aria-label="YouTube"
              >
                <Youtube className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-red-400" : "text-red-600"}`} />
              </a>
              <a
                href="https://x.com/Vyankatesh_1429"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark ? "bg-sky-600/20 hover:bg-sky-600/30" : "bg-sky-100 hover:bg-sky-200"
                }`}
                aria-label="X (Twitter)"
              >
                <Twitter className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-sky-400" : "text-sky-600"}`} />
              </a>
              <a
                href="https://dev.to/vyankateshbairagi"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark ? "bg-purple-600/20 hover:bg-purple-600/30" : "bg-purple-100 hover:bg-purple-200"
                }`}
                aria-label="Dev.to"
              >
                <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
                </svg>
              </a>
              <a
                href="mailto:vyankateshbairagi.dev@gmail.com"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark ? "bg-green-600/20 hover:bg-green-600/30" : "bg-green-100 hover:bg-green-200"
                }`}
                aria-label="Email"
              >
                <Mail className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
              </a>
            </div>
        </div>

        <div
          id="star-border-btn"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50"
        >
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
      </div>

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

export default App;
