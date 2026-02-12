import {
    SiPython, SiC, SiJavascript,
    SiReact, SiHtml5, SiCss3,
    SiNodedotjs, SiExpress,
    SiMongodb, SiMysql,
    SiGit, SiGithub
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { 
    Code2, Layout, Braces, Cpu
} from 'lucide-react';

export const skills = {
    languages: [
        { name: "Java", icon: FaJava, color: "text-red-500" },
        { name: "Python", icon: SiPython, color: "text-blue-500" },
        { name: "C/C++", icon: SiC, color: "text-purple-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
    frontend: [
        { name: "React.js", icon: SiReact, color: "text-cyan-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-400" },
        { name: "JavaScript ES6+", icon: SiJavascript, color: "text-yellow-400" },
       
    ],
    backend: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    ],
    database: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    ],
    tools: [
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
    ],
    coreCompetencies: [
        { name: "Data Structures & Algorithms", icon: Code2, color: "text-cyan-400" },
        { name: "Operating Systems", icon: Cpu, color: "text-green-400" },
        { name: "Software Design", icon: Layout, color: "text-purple-400" },
        { name: "Problem Solving", icon: Braces, color: "text-yellow-400" },
    ]
};
