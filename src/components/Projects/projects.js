import { ShoppingCart, Smartphone, Database } from 'lucide-react';

export const projects = [
    {
        id: 1,
        title: "Grocery Website",
        description: "Full-stack grocery web app for online product browsing, offers, and secure shopping experience with admin panel for product management (CRUD), authentication, and real-time stock updates.",
        tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
        icon: ShoppingCart,
        color: "text-green-400",
        link: "#",
        featured: true
    },
    {
        id: 2,
        title: "Agri App - Government Schemes",
        description: "Mobile application simplifying farmers' access to government schemes with real-time updates, eligibility checks, document uploads, and secure Aadhaar/PAN-based submission. Published in IJARSCT journal (Vol. 3, Issue 8, April 2023).",
        tech: ["Android", "Firebase", "Java", "XML", "Firebase Auth", "Firestore"],
        icon: Smartphone,
        color: "text-blue-400",
        link: "#",
        featured: true
    }
];
