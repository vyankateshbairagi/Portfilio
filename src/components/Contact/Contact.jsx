import React, { useEffect, useRef, useState, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Helper functions to reduce cognitive complexity
const getLabelClass = (isDark) => `block text-sm font-semibold ${isDark ? 'text-zinc-200' : 'text-slate-700'}`;

const getInputClass = (isDark) => `mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
  isDark
    ? 'border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus:border-cyan-400/60'
    : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-cyan-500'
}`;

const getStatusColorClass = (isDark, state) => {
  if (state === 'success') {
    return isDark ? 'text-cyan-300' : 'text-cyan-700';
  }
  return isDark ? 'text-rose-300' : 'text-rose-600';
};

const FormField = ({ label, id, name, type = 'text', placeholder = '', required = false, value, onChange, isDark, multiline = false }) => {
  const InputComponent = multiline ? 'textarea' : 'input';
  return (
    <div className={multiline ? 'md:col-span-2' : ''}>
      <label htmlFor={id} className={getLabelClass(isDark)}>
        {label}
      </label>
      <InputComponent
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        rows={multiline ? 5 : undefined}
        className={getInputClass(isDark)}
        placeholder={placeholder}
      />
    </div>
  );
};

const Contact = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const containerRef = useRef(null);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        company: '',
    });
    const [status, setStatus] = useState({ state: 'idle', message: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus({ state: 'loading', message: '' });

        const payload = {
            name: formState.name,
            email: formState.email,
            phone: formState.phone,
            subject: formState.subject,
            message: formState.message,
            company: formState.company,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(result.message || 'Request failed');
            }

            setFormState({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                company: '',
            });
            setStatus({
                state: 'success',
                message: result.message || 'Thanks! Your message has been sent.',
            });
        } catch (error) {
            console.error('Form submission error:', error instanceof Error ? error.message : String(error));
            setStatus({ state: 'error', message: 'Sorry, something went wrong. Try again.' });
        }
    };

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
            className="py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500"
        >

            <div className="contact-content max-w-5xl mx-auto text-center relative z-10">
                <h2
                    className={`text-4xl md:text-6xl font-bold mb-8 font-['Manrope'] tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}
                >
                    Let's Build Something <br />
                    <span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>Extraordinary.</span>
                </h2>

                <p className={`text-xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <form
                    onSubmit={handleSubmit}
                    className={`mx-auto mt-12 grid gap-6 rounded-3xl border p-6 text-left md:grid-cols-2 ${
                        isDark
                            ? 'border-white/10 bg-white/5'
                            : 'border-slate-200 bg-white/80'
                    }`}
                >
                    <FormField
                        label="Name"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        isDark={isDark}
                    />
                    <FormField
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        isDark={isDark}
                    />
                    <FormField
                        label="Phone"
                        id="phone"
                        name="phone"
                        placeholder="Optional"
                        value={formState.phone}
                        onChange={handleChange}
                        isDark={isDark}
                    />
                    <FormField
                        label="Subject"
                        id="subject"
                        name="subject"
                        placeholder="Project inquiry"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        isDark={isDark}
                    />
                    <FormField
                        label="Message"
                        id="message"
                        name="message"
                        placeholder="Tell me about your project"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        isDark={isDark}
                        multiline
                    />
                    <div className="hidden">
                        <label className="sr-only" htmlFor="company">
                            Company
                        </label>
                        <input
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>
                    <div className="md:col-span-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                        <button
                            type="submit"
                            disabled={status.state === 'loading'}
                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 group ${
                                isDark
                                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                                    : 'bg-slate-900 text-white hover:bg-cyan-600'
                            } ${status.state === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {status.state === 'loading' ? 'Sending...' : 'Send message'}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        {status.message ? (
                            <p
                                className={`text-sm ${getStatusColorClass(isDark, status.state)}`}
                            >
                                {status.message}
                            </p>
                        ) : null}
                    </div>
                </form>

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

export default memo(Contact);
