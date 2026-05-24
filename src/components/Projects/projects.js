import { ShoppingCart, Smartphone, Database } from 'lucide-react';

export const projects = [
   {
    id: 1,
    title: "PanditJi – Divine Puja & Astrology Platform",
    description:
       "A full-stack MERN web application that connects devotees with verified pandits for puja bookings, religious ceremonies, and astrological services. The platform includes secure JWT authentication, Razorpay payment integration, real-time booking updates, astrology tools like Kundali & Horoscope, role-based dashboards (User, Pandit, Admin), and a fully responsive spiritual-themed UI.",
    tech: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT Authentication",
        "Socket.IO",
        "Razorpay",
        "Tailwind CSS",
        "Cloudinary"
    ],
    icon: Database,
    color: "text-orange-400",
    link: "https://panditjipuja.vercel.app/",
    github: "https://github.com/vyankateshbairagi/PanditJi-Divine-Puja-Astrology-Platform",
    featured: true,
    highlights: [
        "Role-based authentication (User, Pandit, Admin)",
        "Online puja booking & scheduling system",
        "Astrology tools: Kundali, Horoscope & Compatibility",
        "Secure online payments with Razorpay",
        "Real-time notifications using Socket.IO",
        "Admin dashboard for service, booking & user management",
        "Pandit dashboard for profile & booking handling",
        "Responsive spiritual-themed UI"
    ]
},
{
    id: 2,
    title: "Prego - Grocery E-Commerce Platform",
    description:
    "A MERN-based online grocery shopping platform featuring customer and seller dashboards, JWT authentication, Razorpay payment integration, Cloudinary image uploads, cart management, order tracking, and responsive UI."  ,
      tech: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "JWT Authentication",
        "Razorpay",
        "Cloudinary",
        "Context API",
        "Axios",
        "Mongoose"
    ],
    icon: ShoppingCart,
    color: "text-green-400",
    link: "https://prego-online-grocery-shopping.vercel.app/",
    github: "https://github.com/vyankateshbairagi/Prego-Grocery-E-Commerce-Platform",
    featured: true,
    highlights: [
        "Customer & Seller/Admin Dashboard",
        "JWT Authentication & Role-Based Access",
        "Online Payment Integration with Razorpay",
        "Cash on Delivery (COD) Support",
        "Cloudinary Image Upload System",
        "Product & Inventory Management",
        "Shopping Cart & Address Management",
        "Order Tracking & Order History",
        "Responsive UI with Tailwind CSS",
        "Secure REST APIs with Express & MongoDB"
    ]
},
    {
        id: 3,
        title: "Agri App - Government Schemes",
        description: "Mobile application simplifying farmers' access to government schemes with real-time updates, eligibility checks, document uploads, and secure Aadhaar/PAN-based submission. Published in IJARSCT journal (Vol. 3, Issue 8, April 2023).",
        tech: ["Android", "Firebase", "Java", "XML", "Firebase Auth", "Firestore"],
        icon: Smartphone,
        color: "text-blue-400",
        link: "#",
        featured: true
    }
];
