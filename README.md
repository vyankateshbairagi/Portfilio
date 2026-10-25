# Vyankatesh Bairagi — Software Engineer Portfolio

Official, production-ready developer portfolio for **Vyankatesh Bairagi**, Computer Engineering graduate and Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and AI-powered applications.

🌐 **Live Website**: [https://vyankateshbairagi.vercel.app/](https://vyankateshbairagi.vercel.app/)  
💼 **LinkedIn**: [https://www.linkedin.com/in/vyankateshbairagi](https://www.linkedin.com/in/vyankateshbairagi)  
🐙 **GitHub**: [https://github.com/vyankateshbairagi](https://github.com/vyankateshbairagi)  
✍️ **Dev.to**: [https://dev.to/vyankateshbairagi](https://dev.to/vyankateshbairagi)  

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 7, Tailwind CSS v4, Lucide React, GSAP 3.13
- **Backend & APIs**: Node.js, Express 5 (Local API), Vercel Serverless Functions (`/api/contact.js`)
- **Email & Automation**: Nodemailer with SMTP transport
- **Design & UX**: Responsive layout, persistent Dark/Light mode theme system, high-contrast typography (Google Font Manrope & JetBrains Mono), interactive case study modal
- **SEO & Discoverability**: Semantic HTML5, Open Graph protocol, Twitter cards, JSON-LD structured data (`Person` & `WebSite`), `robots.txt`, and XML sitemap

---

## 📋 Website Sections & Architecture

1. **Navigation**: Responsive navigation bar featuring brand monogram ("VB"), 8 section anchor links, active section detection, theme switcher, and direct PDF resume download.
2. **Hero**: High-impact value proposition highlighting full-stack engineering, ThinkBuild internship, published research, and dual calls-to-action.
3. **About Me**: Factual, recruiter-ready narrative detailing Computer Engineering background, system architecture, authentication, databases, and AI integration.
4. **Professional Experience**: Dedicated showcase of the **ThinkBuild** Web Development Internship (logistics management platform, dashboard interfaces, API state handling).
5. **Featured Projects**: Filterable project gallery with technical architecture case studies:
   - **PlacementHub (2026)**: AI-powered campus recruitment system with 6 role portals, ATS resume scoring, mock interview feedback via Gemini AI, and FastAPI microservice.
   - **PanditJi (2026)**: Full-stack puja booking & astrology platform with Razorpay payments, Socket.IO, and Cloudinary uploads.
   - **ChaloBuild (2026)**: Gym management dashboard with member renewal tracking, PostgreSQL, and Prisma ORM.
   - **Prego (2025)**: Grocery e-commerce application with customer/seller modules and payment signature verification.
   - **Retail Purchase Intelligence System**: Research-led price comparison and automated normalization platform.
6. **Research & Publications**: Dedicated showcase of 3 peer-reviewed research papers:
   - *Retail Purchase Intelligence System: Implementation & Evaluation* (IJASRET Vol 10, 2026) — Reports 94.7% accuracy & 3.2s response time in paper evaluation.
   - *Retail Purchase Intelligence System* (IJASRET Vol 9, 2025, DOI: [10.65521/ijasret.v9i10.1487](https://doi.org/10.65521/ijasret.v9i10.1487)).
   - *Agri App-for Government Schemes* (IJARSCT Vol 3, 2023).
7. **Technical Skills**: Organized into 7 practical categories with zero arbitrary percentage bars: Programming Languages, Frontend Engineering, Backend & APIs, Databases & ORM, Auth & Cloud Integrations, Developer Tools, and CS Core Concepts.
8. **Education & Leadership**: Verified academic background (B.E. Computer Engineering with confirmed 8.23 CGPA, Diploma with 84.8%, SSC with 87%), Simplilearn certifications, and CESA Coordinator leadership for 383+ students.
9. **Blogs**: Dynamic DEV.to feed integration fetching real-time technical articles.
10. **Contact**: Recruiter-friendly contact section with `mailto:`, `tel:`, copy-to-clipboard email utility, and resilient serverless contact form.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.x or v20.x recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/vyankateshbairagi/Portfilio.git
cd Portfilio
npm install
```

### Environment Configuration
Create a `.env` file in the root directory for local contact form testing:
```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_TO=vyankateshbairagi.dev@gmail.com
MAIL_FROM=your-email@gmail.com
MAIL_FROM_NAME="Portfolio Inquiry"
```

### Running Locally
```bash
# Runs both the Vite client dev server and the local Express contact server concurrently
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build & Vercel Deployment

### Build Command
```bash
npm run build
```
This runs Vite build and compiles production assets into `dist/`.

### Deployment Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Configuration File**: [vercel.json](./vercel.json) (includes SPA rewrites, `/api/` preservation, and security headers)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
