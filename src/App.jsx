import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import useWindowSize from "./hooks/useWindowSize";
import SplitText from "./components/SplitText";
import TextType from "./components/TextType";
import StarBorder from "./components/StarBorder";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

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
              Aspiring MERN Stack Developer
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
            Grab My CV
          </StarBorder>
        </div>
      </div>

      {/* About Section */}
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Experience theme={theme} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
