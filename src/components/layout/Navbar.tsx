"use client";

import React, { useState, useEffect } from "react";
import { Home, Folder, User, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [active, setActive] = useState("Home");

    const navItems = [
        { icon: Home, label: "Home", id: "home" },
        { icon: Folder, label: "Projects", id: "projects" },
        { icon: User, label: "Experience", id: "experience" },
        { icon: Mail, label: "Contact", id: "contact" },
    ];

    // --- SCROLL LOGIC (Unchanged) ---
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => {
                if (item.id === "home") return { id: "home", offset: 0 };
                const el = document.getElementById(item.id);
                return { id: item.id, offset: el ? el.offsetTop - 300 : 0 };
            });

            const current = sections.reduce((acc, curr) => {
                return window.scrollY >= curr.offset ? curr : acc;
            }, sections[0]);

            setActive(navItems.find(i => i.id === current.id)?.label || "Home");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            {/* CONTAINER: No background, just Flex */}
            <nav className="flex items-center shadow-lg rounded-full">
                {navItems.map((item, index) => {
                    const isActive = active === item.label;
                    const isFirst = index === 0;
                    const isLast = index === navItems.length - 1;

                    return (
                        <button
                            key={item.label}
                            onClick={() => {
                                setActive(item.label);
                                scrollToSection(item.id);
                            }}
                            className={`
                                relative flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium
                                overflow-hidden transition-colors duration-200
                                
                                /* BASE COLORS (Secondary/Inactive) */
                                bg-secondary hover:bg-secondary/80
                                
                                /* TEXT COLORS */
                                ${isActive ? "text-primary-foreground" : "text-muted-foreground"}

                                /* SHAPE LOGIC */
                                ${isFirst ? "rounded-l-full pl-8" : ""}
                                ${isLast ? "rounded-r-full pr-8" : ""}
                                
                                /* SEPARATORS (Border matches bg) */
                                ${!isLast ? "border-r border-background/20" : ""}
                            `}
                        >
                            {/* THE SLIDING DARK BACKGROUND */}
                            {isActive && (
                                <motion.div
                                    layoutId="active-segment"
                                    className="absolute inset-0 bg-primary -z-0"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30
                                    }}
                                />
                            )}

                            {/* CONTENT (Relative to sit on top) */}
                            <span className="relative z-10 flex items-center gap-2">
                                {/* Optional: Swap icon for Checkmark when active like your image */}
                                {isActive ? (
                                    <Check size={16} strokeWidth={3} />
                                ) : (
                                    <item.icon size={16} strokeWidth={2} />
                                )}

                                <span className="hidden md:block">{item.label}</span>
                            </span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};