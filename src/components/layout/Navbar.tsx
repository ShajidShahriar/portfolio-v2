
"use client";

import React from "react";
import { Home, Folder, Briefcase, User, Mail } from "lucide-react";

export const Navbar = () => {
    const [active, setActive] = React.useState("Home");

    const navItems = [
        { icon: Home, label: "Home", id: "home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
        { icon: Folder, label: "Projects", id: "projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
        { icon: User, label: "Experience", id: "experience", action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
        { icon: Mail, label: "Contact", id: "contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => {
                if (item.id === "home") return { id: "home", offset: 0 };
                const el = document.getElementById(item.id);
                return { id: item.id, offset: el ? el.offsetTop - 200 : 0 };
            });

            const scrollPosition = window.scrollY;
            const current = sections.reduce((acc, curr) => {
                return scrollPosition >= curr.offset ? curr : acc;
            }, sections[0]);

            setActive(navItems.find(i => i.id === current.id)?.label || "Home");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <nav className="flex items-center gap-2 p-2 bg-secondary border border-border/10 rounded-full shadow-2xl">
                {navItems.map((item) => {
                    const isActive = active === item.label;
                    return (
                        <button
                            key={item.label}
                            onClick={() => {
                                setActive(item.label);
                                item.action();
                            }}
                            className={`
                relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}
              `}
                        >
                            {isActive && (
                                <span className="absolute inset-0 bg-primary rounded-full -z-10 animate-in fade-in zoom-in duration-200" />
                            )}
                            <item.icon size={18} />
                            <span className={`text-sm font-medium ${isActive ? "block" : "hidden md:block"}`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};
