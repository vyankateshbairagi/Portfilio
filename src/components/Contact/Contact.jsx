import React, { useState, memo } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  Download
} from 'lucide-react';

const Contact = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: '' // honeypot
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copied, setCopied] = useState(false);

  const emailAddress = 'vyankateshbairagi.dev@gmail.com';
  const phoneNumber = '+919075097235';
  const formattedPhone = '+91 90750 97235';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus({
        state: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
      });
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        company: ''
      });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        state: 'error',
        message:
          'Unable to send via automated form right now. Please reach out directly at ' +
          emailAddress
      });
    }
  };

  const cardShell = isDark
    ? 'bg-slate-900/40 border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/30 card-highlight hover:border-cyan-500/30 transition-all duration-300'
    : 'bg-white/85 border-slate-200/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 hover:border-slate-300 transition-all duration-300';

  const inputClass = isDark
    ? 'border-slate-800/80 bg-slate-950/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 backdrop-blur-sm shadow-inner'
    : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 shadow-xs';

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase mb-3 border bg-cyan-500/10 border-cyan-400/25 text-cyan-300 backdrop-blur-md shadow-sm">
            <Mail size={13} />
            <span>Get In Touch</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Discuss <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            I am actively exploring entry-level Software Engineer, Full Stack Developer, and Frontend (React/Next.js) roles across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
          {/* Direct Channels */}
          <div className="space-y-6">
            <div className={`rounded-2xl border p-6 sm:p-8 ${cardShell}`}>
              <h3
                className={`text-xl font-bold font-['Manrope'] mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Direct Communication Channels
              </h3>
              <p
                className={`text-xs sm:text-sm mb-6 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Feel free to email, call, or connect with me via professional networks:
              </p>

              <div className="space-y-4">
                {/* Email with copy */}
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-3 overflow-hidden group"
                  >
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        Email Address
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          isDark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-800 group-hover:text-cyan-700'
                        }`}
                      >
                        {emailAddress}
                      </p>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`p-2 rounded-lg border transition-colors shrink-0 ${
                      isDark
                        ? 'border-slate-800 hover:bg-slate-800 text-slate-300'
                        : 'border-slate-200 hover:bg-slate-200 text-slate-700'
                    }`}
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${phoneNumber}`}
                  className={`p-4 rounded-xl border flex items-center gap-3 group transition-colors ${
                    isDark
                      ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      Phone Number
                    </p>
                    <p
                      className={`text-xs sm:text-sm font-semibold ${
                        isDark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-800 group-hover:text-cyan-700'
                      }`}
                    >
                      {formattedPhone}
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vyankateshbairagi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 group transition-colors ${
                    isDark
                      ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        LinkedIn Profile
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${
                          isDark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-800 group-hover:text-cyan-700'
                        }`}
                      >
                        linkedin.com/in/vyankateshbairagi
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-slate-500" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/vyankateshbairagi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 group transition-colors ${
                    isDark
                      ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-500/10 text-slate-400 shrink-0">
                      <Github size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        GitHub Profile
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold ${
                          isDark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-800 group-hover:text-cyan-700'
                        }`}
                      >
                        github.com/vyankateshbairagi
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-slate-500" />
                </a>

                {/* Download Resume Action */}
                <a
                  href="/Vyankatesh_Bairagi_CV.pdf"
                  download="Vyankatesh_Bairagi_CV.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md font-['Manrope']"
                >
                  <Download size={16} />
                  <span>Download Verified Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl border p-6 sm:p-8 ${cardShell}`}>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={18} className="text-cyan-400" />
              <h3
                className={`text-xl font-bold font-['Manrope'] ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Send a Message
              </h3>
            </div>
            <p
              className={`text-xs sm:text-sm mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Fill out this form to connect directly. Submissions trigger an email notification via the serverless API.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`block text-xs font-mono font-medium mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Recruiter or Hiring Team"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${inputClass}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className={`block text-xs font-mono font-medium mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${inputClass}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className={`block text-xs font-mono font-medium mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${inputClass}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className={`block text-xs font-mono font-medium mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Developer Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${inputClass}`}
                  />
                </div>
              </div>

              {/* Honeypot field (hidden from humans) */}
              <div className="hidden" aria-hidden="true">
                <input
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={`block text-xs font-mono font-medium mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Share details regarding the role, tech stack, or engineering project..."
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors border ${inputClass}`}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto ${
                    status.state === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send size={15} />
                  <span>
                    {status.state === 'loading' ? 'Sending...' : 'Send Inquiry'}
                  </span>
                </button>

                {status.message && (
                  <p
                    className={`text-xs font-medium ${
                      status.state === 'success'
                        ? 'text-emerald-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Professional Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>
            © {new Date().getFullYear()} Vyankatesh Bairagi. Verified Portfolio.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vyankateshbairagi/Portfilio"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:underline ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Portfolio Source Code
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="#home"
              className={`hover:underline ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
