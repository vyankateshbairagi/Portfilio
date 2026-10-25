export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai", label: "AI-Powered" },
  { id: "nextjs", label: "Next.js" },
  { id: "research", label: "Research-Led" },
];

export const projectsData = [
  {
    id: "placementhub",
    title: "PlacementHub – AI-Powered Campus Placement & Career Platform",
    tagline: "Centralized campus recruitment platform with multi-role portals and AI evaluation.",
    year: "2026",
    categories: ["all", "fullstack", "ai", "nextjs"],
    badge: "Flagship Architecture",
    featured: true,
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Neon",
      "Prisma ORM",
      "NextAuth.js",
      "Python FastAPI",
      "Node.js",
      "Express.js",
      "Google Gemini AI"
    ],
    github: "https://github.com/vyankateshbairagi/PlacementHub",
    liveDemo: null, // No verified public deployment yet; display source code and demo coming soon
    statusBadge: "Source Code Available",
    problemStatement:
      "Traditional campus placement processes suffer from fragmented communications across students, recruiters, and placement officers, manual resume screening bottlenecks, and lack of objective pre-interview skill assessments.",
    solutionOverview:
      "A centralized platform unifying 6 role-specific portals (Students, Recruiters, Placement Officers, Faculty Mentors, Alumni, and Administrators) with automated ATS scoring, AI mock interviews powered by Gemini AI, and integrated coding assessments.",
    keyFeatures: [
      "Role-specific portals with customized access control and recruitment workflows",
      "AI-powered ATS resume parsing and scoring against job descriptions",
      "Automated mock interview simulator with tailored feedback using Google Gemini AI",
      "In-browser coding assessment engine with test case validation",
      "Scalable relational data management using PostgreSQL and Prisma ORM on Neon",
      "Decoupled microservice architecture separating AI workloads from the core web app"
    ],
    architectureHighlights: [
      "Frontend & Core API: Next.js 14 App Router, TypeScript, and Server Actions",
      "AI Service: Python FastAPI microservice handling LLM prompting and resume parsing",
      "Assessment Engine: Node.js worker service evaluating code submissions safely",
      "Database & Security: PostgreSQL via Prisma ORM with role-based JWT and NextAuth authentication"
    ]
  },
  {
    id: "panditji",
    title: "PanditJi – Divine Puja & Astrology Platform",
    tagline: "Connecting devotees with verified pandits for puja bookings and astrology services.",
    year: "2026",
    categories: ["all", "fullstack"],
    badge: "Production Deployed",
    featured: true,
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
      "Cloudinary",
      "Socket.IO"
    ],
    github: "https://github.com/vyankateshbairagi/PanditJi-Divine-Puja-Astrology-Platform",
    liveDemo: "https://panditjipuja.vercel.app/",
    statusBadge: "Live Application",
    problemStatement:
      "Finding verified religious professionals for specific cultural ceremonies and astrological consultations is traditionally opaque, decentralized, and lacks transparent booking or payment systems.",
    solutionOverview:
      "A comprehensive MERN web application enabling users to browse puja packages, schedule ceremonies with qualified pandits, make secure digital payments, and access astrological tools.",
    keyFeatures: [
      "Role-specific portals for devotees, verified pandits, and platform administrators",
      "Online puja booking and calendar scheduling system",
      "Astrology utilities including Kundali generation and horoscope calculation",
      "Secure payment processing via Razorpay gateway with signature verification",
      "Digital certificate and puja photo sharing via Cloudinary media pipeline",
      "Real-time booking status notifications powered by Socket.IO"
    ],
    architectureHighlights: [
      "Client: React SPA styled with responsive Tailwind CSS, deployed on Vercel",
      "Backend: Express.js REST API with modular controllers and middleware, hosted on Render",
      "Database: MongoDB Atlas with Mongoose schemas for users, bookings, pandit profiles, and reviews",
      "Security: JWT-based stateless authentication with role-based route guards"
    ]
  },
  {
    id: "chalobuild",
    title: "ChaloBuild – Gym Management System",
    tagline: "Modern administrative system for member tracking, memberships, and analytics.",
    year: "2026",
    categories: ["all", "fullstack", "nextjs"],
    badge: "Full Stack SaaS",
    featured: true,
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "JWT"
    ],
    github: "https://github.com/vyankateshbairagi/ChaloBuild",
    liveDemo: "https://chalo-build.vercel.app/",
    statusBadge: "Live Application",
    problemStatement:
      "Gym operators often struggle with manual paper logs, missed subscription renewals, unorganized member data, and an absence of operational revenue insights.",
    solutionOverview:
      "A full-stack web application delivering centralized member management, plan expiration tracking, search and filtering tools, and administrative analytics.",
    keyFeatures: [
      "Centralized management dashboard for gym owners and desk operators",
      "Member onboarding with contact tracking, emergency records, and plan assignments",
      "Automated membership expiry calculations and renewal status badges",
      "Searchable member database with quick filters and pagination",
      "Revenue summary metrics and attendance overview charts"
    ],
    architectureHighlights: [
      "Frontend & Routing: Next.js with TypeScript and responsive Tailwind CSS layout",
      "Data Access: Prisma ORM interfacing with a relational PostgreSQL database",
      "Security: Role-based access control protecting administrative endpoints and organization records"
    ]
  },
  {
    id: "prego",
    title: "Prego – Online Grocery Shopping Platform",
    tagline: "Full-featured e-commerce platform with customer and merchant portals.",
    year: "2025",
    categories: ["all", "fullstack"],
    badge: "E-Commerce",
    featured: true,
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
      "Cloudinary"
    ],
    github: "https://github.com/vyankateshbairagi/Prego-Grocery-E-Commerce-Platform",
    liveDemo: "https://prego-online-grocery-shopping.vercel.app/",
    statusBadge: "Live Application",
    problemStatement:
      "Local grocery vendors lack an intuitive, affordable platform to showcase daily inventory, process cashless transactions, and track multi-stage order fulfillment.",
    solutionOverview:
      "An end-to-end e-commerce platform offering tailored interfaces for shoppers and store merchants, supporting secure online checkout and dynamic inventory management.",
    keyFeatures: [
      "Separate customer shopping interface and seller inventory management dashboard",
      "Product catalog with categories, real-time stock levels, and search filters",
      "Shopping cart, delivery address management, and checkout pipeline",
      "Online payment integration with Razorpay alongside Cash on Delivery (COD) support",
      "Cloudinary image upload system for merchant product listings",
      "Order status lifecycle tracking from pending to dispatched and delivered"
    ],
    architectureHighlights: [
      "Frontend: React.js with Context API state management and Axios HTTP client",
      "Backend: Node.js/Express REST API with cookie/header token handling and MongoDB Atlas",
      "Verification: Cryptographic HMAC signature validation for Razorpay payment webhooks"
    ]
  },
  {
    id: "retail-intelligence",
    title: "Retail Purchase Intelligence System",
    tagline: "Research-driven multi-source price extraction and market comparison engine.",
    year: "2025–2026",
    categories: ["all", "research"],
    badge: "Peer-Reviewed Research",
    featured: true,
    tech: [
      "Python",
      "BeautifulSoup",
      "Requests",
      "Selenium",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    github: "https://github.com/vyankateshbairagi",
    liveDemo: null, // Academic research prototype; no live commercial hosting
    statusBadge: "Published Research Project",
    problemStatement:
      "Consumer e-commerce marketplaces present volatile, fragmented pricing, making manual comparison across multiple retail sites tedious and inefficient for buyers.",
    solutionOverview:
      "An automated web-scraping and data normalization pipeline that collects, parses, and compares product pricing across major retail platforms, presenting normalized insights through a comparative web interface.",
    keyFeatures: [
      "Multi-source web scraper handling dynamic JavaScript-rendered pages using Selenium and BeautifulSoup",
      "Data normalization algorithms unifying diverse product titles, brand tokens, and currency formats",
      "Centralized relational MySQL storage storing timestamped pricing for historical comparison",
      "Clean browser-based comparison interface providing instant price disparity alerts",
      "Documented in two peer-reviewed research papers in IJASRET (Vol 9, 2025 & Vol 10, 2026)"
    ],
    architectureHighlights: [
      "Extraction Pipeline: Python automation combining lightweight Requests/BeautifulSoup with headless Selenium fallback",
      "Storage: Normalized relational schema in MySQL optimizing querying across multi-retailer records",
      "Published Paper Findings: Reports 94.7% price-extraction accuracy, 3.2s average system response time, and 96.1% data-normalization success in experimental evaluation"
    ],
    relatedPublications: ["retail-2026", "retail-2025"]
  }
];
