
import { Profile, Project, Education } from "@/types/schema";

export const profile: Profile = {
    name: "Shajid Shahriar",
    title: "Software Engineer",
    bio: "A Software Engineer who has developed countless innovative solutions. Passionate about creating intuitive user experiences.",
    avatar: "./profile.jpg",
    contact: {
        email: "your@email.com",
        linkedin: "https://www.linkedin.com/in/shajid-shahriar-194301292?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BH7wQ9hDXTKqCdUWnu5hLOQ%3D%3D",
        github: "https://github.com/ShajidShahriar",
        twitter: "https://twitter.com",
    },
    socials: [
        { platform: "Globe", url: "#", icon: "Globe" },
        { platform: "Twitter", url: "#", icon: "Twitter" },
        { platform: "Instagram", url: "#", icon: "Instagram" },
        { platform: "Youtube", url: "#", icon: "Youtube" },
    ],
};

export const projects: Project[] = [
    {
        title: "Smart-Vet",
        category: "AI Resume Analyzer",
        description: "An intelligent parsing engine that scores veterinary resumes against job descriptions using NLP.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
        tech: ["OpenAI API", "Python", "Next.js"],
        featured: true,
    },
    {
        title: "Medimove",
        category: "Logistics SaaS",
        description: "Real-time tracking and inventory management dashboard for sensitive medical equipment transport.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        tech: ["React", "Mapbox", "Node.js"],
        featured: true,
    },
    {
        title: "Vortex Finance",
        category: "Fintech Dashboard",
        description: "A decentralized trading platform featuring real-time crypto analytics and liquid swapping.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2670&auto=format&fit=crop",
        tech: ["Solidity", "Web3", "Tailwind"],
        featured: true,
    },
];

export const education = [
    {
        school: "Islamic University of Technology (IUT)",
        degree: "B.Sc. in EEE",
        detail: "Major in Electrical & Electronic Engineering",
        year: "2022 - 2026",
        status: "Present",
        location: "Gazipur, Dhaka",
    },
    {
        school: "Notre Dame College (NDC)",
        degree: "Higher Secondary Certificate",
        detail: "Science Group | Gold Medalist",
        year: "Class of 2021",
        status: "Alumni",
        location: "Motijheel, Dhaka",
    },
];

export const techStack = [
    { name: "React", icon: "Atom" },
    { name: "Next.js", icon: "Layers" },
    { name: "Node.js", icon: "Server" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "Tailwind CSS", icon: "Wind" },
    { name: "MongoDB", icon: "Database" },
    { name: "Supabase", icon: "Database" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Python", icon: "FileJson" },
    { name: "OpenAI API", icon: "Cpu" },
];

export const skills = {
    frontend: [
        { name: "React", icon: "Atom", desc: "Building interactive UIs" },
        { name: "Next.js", icon: "Layers", desc: "Full-stack apps & SEO" },
        { name: "Tailwind CSS", icon: "Wind", desc: "Rapid styling" },
        { name: "TypeScript", icon: "FileCode", desc: "Type-safe code" },
        { name: "Framer Motion", icon: "Move", desc: "Smooth animations" },
    ],
    backend: [
        { name: "Node.js", icon: "Server", desc: "Scalable APIs" },
        { name: "MongoDB", icon: "Database", desc: "NoSQL data storage" },
        { name: "PostgreSQL", icon: "Database", desc: "Relational data" },
        { name: "Supabase", icon: "Database", desc: "Backend as a Service" },
    ],
    tools: [
        { name: "Git", icon: "GitBranch", desc: "Version control" },
        { name: "Docker", icon: "Container", desc: "Containerization" },
        { name: "Python", icon: "FileJson", desc: "Scripts & AI" },
        { name: "OpenAI API", icon: "Cpu", desc: "Generative AI integration" },
    ],
};


