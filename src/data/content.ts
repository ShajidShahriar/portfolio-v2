
import { Profile, Project, Education } from "@/types/schema";

export const profile: Profile = {
    name: "Shajid Shahriar",
    title: "Software Engineer",
    bio: "A Software Engineer who has developed countless innovative solutions. Passionate about creating intuitive user experiences.",
    avatar: "./profile.jpg",
    contact: {
        email: "your@email.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
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
