import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiExternalLink,
} from 'react-icons/fi'
import { HiDownload } from 'react-icons/hi'

const skillSet = [
  { name: 'React & Next.js', level: 90, icon: '⚛️', tone: 'from-neon-blue to-neon-cyan' },
  { name: 'Node.js & Express', level: 86, icon: '🟢', tone: 'from-emerald-400 to-neon-cyan' },
  { name: 'MongoDB & SQL', level: 82, icon: '🗄️', tone: 'from-amber-400 to-orange-500' },
  { name: 'TypeScript & JavaScript', level: 88, icon: '⌨️', tone: 'from-blue-400 to-neon-purple' },
  { name: 'Data Structures & Algorithms', level: 80, icon: '🧠', tone: 'from-fuchsia-400 to-neon-purple' },
  { name: 'Cloud & DevOps Basics', level: 70, icon: '☁️', tone: 'from-sky-400 to-indigo-500' },
]

const projects = [
  {
    title: 'Grocery Website — MERN',
    year: '2025',
    description:
      'Full-stack grocery platform with product browsing, offers, admin CRUD, auth, and real-time stock syncing.',
    tech: ['MongoDB', 'Express', 'React', 'Node', 'Tailwind'],
    live: '#',
    github: 'https://github.com/vyankateshbairagi',
  },
  {
    title: 'Agri App — Gov Schemes',
    year: '2023',
    description:
      'Android app simplifying access to government schemes with eligibility checks, uploads, and Firebase auth.',
    tech: ['Android', 'Java', 'Firebase', 'XML'],
    live: '#',
    github: 'https://github.com/vyankateshbairagi',
  },
  {
    title: 'System Design Practice',
    year: '2024',
    description:
      'Conceptual designs for scalable services, focusing on API-first architecture, caching, and observability.',
    tech: ['Design', 'APIs', 'Caching', 'Observability'],
    live: '#',
    github: 'https://github.com/vyankateshbairagi',
  },
]

const experiences = [
  {
    title: 'B.E. Computer Engineering',
    place: 'Sandip Institute of Technology & Research Centre',
    detail: 'CGPA: 8.48 (Third Year), 2023 – 2026',
  },
  {
    title: 'Diploma in Computer Technology',
    place: 'Amrutvahini Polytechnic',
    detail: 'Percentage: 84.8, 2020 – 2023',
  },
  {
    title: 'Core CS Foundations',
    place: 'DSA · OS · DBMS · CN · ML',
    detail: 'Hands-on labs, problem-solving, and project work.',
  },
]

const contacts = [
  { label: '+91 9075097235', href: 'tel:+919075097235', icon: <FiPhone /> },
  {
    label: 'vyankateshbairagi.dev@gmail.com',
    href: 'mailto:vyankateshbairagi.dev@gmail.com',
    icon: <FiMail />,
  },
  {
    label: 'linkedin.com/in/vyankateshbairagi',
    href: 'https://linkedin.com/in/vyankateshbairagi',
    icon: <FiLinkedin />,
  },
  {
    label: 'github.com/vyankateshbairagi',
    href: 'https://github.com/vyankateshbairagi',
    icon: <FiGithub />,
  },
]

const fadeIn = (direction = 'up', delay = 0) => {
  const distance = 30
  const initial =
    direction === 'up'
      ? { opacity: 0, y: distance }
      : direction === 'down'
        ? { opacity: 0, y: -distance }
        : direction === 'left'
          ? { opacity: 0, x: distance }
          : { opacity: 0, x: -distance }

  return {
    initial,
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }
}

const FloatingOrb = ({ className }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 10, 0] }}
    transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
  />
)

function App() {
  const resumeLink = 'https://drive.google.com/uc?export=download&id=YOUR_RESUME_ID'

  return (
    <div className="relative min-h-screen bg-night text-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-60" />
      <FloatingOrb className="-left-20 top-10 h-72 w-72 bg-neon-blue/20" />
      <FloatingOrb className="right-10 top-40 h-64 w-64 bg-neon-purple/20" />
      <FloatingOrb className="left-1/2 bottom-10 h-72 w-72 bg-neon-cyan/16" />

      <div className="relative max-w-6xl mx-auto px-6 pb-24">
        <header className="sticky top-4 z-30 flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-glass mt-6">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan shadow-glow" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Vyankatesh Bairagi</p>
              <p className="text-sm text-slate-300">Full Stack Developer · MERN</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm text-slate-300">
            {['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-lg">
            <a href="https://github.com/vyankateshbairagi" aria-label="GitHub" className="text-slate-300 hover:text-white transition-colors">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/vyankateshbairagi" aria-label="LinkedIn" className="text-slate-300 hover:text-white transition-colors">
              <FiLinkedin />
            </a>
            <a href="mailto:vyankateshbairagi.dev@gmail.com" aria-label="Email" className="text-slate-300 hover:text-white transition-colors">
              <FiMail />
            </a>
          </div>
        </header>

        <main className="mt-16 space-y-24">
          <section id="hero" className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 shadow-glass">
            <motion.div {...fadeIn('up', 0)} className="max-w-3xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Full Stack Developer · MERN</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Building fast, scalable experiences for the web
              </h1>
              <p className="text-lg text-slate-300">
                Driven Computer Engineering student passionate about web development, backend systems, and scalable application design. I deliver high-quality solutions, learn rapidly, and thrive across the full stack—from elegant UIs to resilient APIs.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-5 py-3 font-semibold text-night shadow-glow"
                >
                  View Projects
                  <FiExternalLink className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
                <motion.a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-100 transition hover:border-white/30 hover:bg-white/10"
                >
                  <HiDownload className="text-xl" />
                  Download Resume
                </motion.a>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
                  Based in Maharashtra, India
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1">
                  Available for internships & freelance
                </span>
              </div>
            </motion.div>
          </section>

          <motion.section id="about" {...fadeIn('up', 0)} className="rounded-3xl border border-white/5 bg-white/5 p-10 backdrop-blur-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
                <h2 className="text-3xl font-semibold text-white">A builder who loves polish</h2>
              </div>
              <p className="max-w-3xl text-lg text-slate-300">
                I craft interfaces with intention and engineer backends that stay resilient under load. My toolkit spans React, Node, MongoDB, and modern UI systems. I enjoy rapid prototyping, design systems, clean APIs, and measurable performance wins.
              </p>
            </div>
          </motion.section>

          <section id="skills" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skills</p>
                <h2 className="text-3xl font-semibold text-white">Tech that I ship with</h2>
              </div>
              <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-slate-300">Hover for pulse</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {skillSet.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  {...fadeIn('up', idx * 0.05)}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-lg font-semibold text-white">
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </div>
                    <span className="text-sm text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.tone}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
                <h2 className="text-3xl font-semibold text-white">Recent builds & explorations</h2>
              </div>
              <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-slate-300">Showcasing MERN & mobile</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, idx) => (
                <motion.article
                  key={project.title}
                  {...fadeIn('up', idx * 0.08)}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{project.year}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 text-slate-300">{project.description}</p>
                    </div>
                    <div className="flex gap-2 text-lg text-slate-300">
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <FiGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <motion.section id="experience" {...fadeIn('up', 0)} className="rounded-3xl border border-white/5 bg-white/5 p-10 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Experience & Education</p>
                <h2 className="text-3xl font-semibold text-white">Growth timeline</h2>
              </div>
              <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-slate-300">Continuous learner</span>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-neon-blue/60 via-white/10 to-neon-purple/60" />
              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.title}
                    {...fadeIn('up', idx * 0.05)}
                    className="relative rounded-2xl border border-white/5 bg-white/5 p-5"
                  >
                    <span className="absolute -left-[14px] top-5 h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{exp.place}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="mt-2 text-slate-300">{exp.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <section id="contact" className="grid gap-6 md:grid-cols-2">
            <motion.div {...fadeIn('right', 0)} className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Let&apos;s build something</h2>
              <p className="mt-3 text-slate-300">
                I'm open to internships, freelance work, and collaborations. Tell me about your idea, product, or the role you're hiring for.
              </p>
              <div className="mt-6 space-y-3">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="text-lg text-neon-cyan">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                    <FiExternalLink className="ml-auto text-slate-500 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              {...fadeIn('left', 0)}
              className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Reach out</p>
                  <h2 className="text-2xl font-semibold text-white">Send a message</h2>
                </div>
                <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-slate-300">Animated fields</span>
              </div>
              <div className="mt-6 space-y-4">
                {['Name', 'Email', 'Project'].map((label, idx) => (
                  <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                    <label className="text-sm text-slate-300">{label}</label>
                    <input
                      required
                      type={label === 'Email' ? 'email' : 'text'}
                      placeholder={label === 'Project' ? 'Tell me about your idea...' : `Your ${label.toLowerCase()}`}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-0 transition focus:border-neon-cyan/60 focus:bg-white/10"
                    />
                  </motion.div>
                ))}
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                  <label className="text-sm text-slate-300">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share the problem, goal, or role details..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-0 transition focus:border-neon-purple/60 focus:bg-white/10"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan px-5 py-3 font-semibold text-night shadow-glow"
                >
                  Send Message
                  <FiExternalLink />
                </motion.button>
              </div>
            </motion.form>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
