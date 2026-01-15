import {
    Code2, Server, Database, Terminal,
    Layout, GitBranch, FileCode, Braces
} from 'lucide-react';

export const skills = {
    languages: [
        { name: "Java", icon: Code2, color: "text-red-500" },
        { name: "Python", icon: Code2, color: "text-blue-500" },
        { name: "C/C++", icon: Code2, color: "text-purple-400" },
        { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
        { name: "HTML5/CSS3", icon: Layout, color: "text-orange-400" },
    ],
    frontend: [
        { name: "React.js", icon: Braces, color: "text-cyan-400" },
        { name: "HTML", icon: FileCode, color: "text-orange-500" },
        { name: "CSS", icon: Layout, color: "text-blue-400" },
        { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
    ],
    backend: [
        { name: "Node.js", icon: Server, color: "text-green-500" },
        { name: "Express.js", icon: Terminal, color: "text-gray-400" },
    ],
    database: [
        { name: "MongoDB", icon: Database, color: "text-green-500" },
        { name: "MySQL", icon: Database, color: "text-blue-400" },
    ],
    tools: [
        { name: "Git", icon: GitBranch, color: "text-orange-500" },
        { name: "GitHub", icon: GitBranch, color: "text-white" },
    ],
    coreCompetencies: [
        { name: "Data Structures", icon: Code2, color: "text-cyan-400" },
        { name: "Algorithms", icon: Code2, color: "text-green-400" },
        { name: "Software Design", icon: Layout, color: "text-purple-400" },
        { name: "Problem Solving", icon: Braces, color: "text-yellow-400" },
    ]
};
