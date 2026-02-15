
"use client";

import React, { useRef } from "react";
import { profile as defaultProfile } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { motion, useScroll, useTransform } from "framer-motion";


interface HeroProps {
    profile: any;
}

export const Hero = ({ profile }: HeroProps) => {
    // Merge prop profile with defaultProfile
    const displayProfile = { ...defaultProfile, ...profile, contact: { ...defaultProfile.contact, ...profile?.contact } };
    const name = displayProfile?.name || "Shajid Shahriar";
    const title = displayProfile?.title || "Frontend Engineer";
    const bio = displayProfile?.bio || "Building accessible, pixel-perfect web experiences.";
    const resumeUrl = displayProfile?.resume_url || "#";

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <Section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-[#FDFBFF]">
            <div className="max-w-3xl space-y-8 relative z-10">
                <div className="space-y-4">
                    <Badge variant="outline" className="px-4 py-1.5 text-sm bg-[#F0FDF4] text-[#15803D] border-green-200">
                        Available for projects
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1C1B1F] text-balance">
                        {name}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-medium text-[#5F6368] text-balance">
                        {title}
                    </h2>
                </div>

                <p className="text-xl text-[#5F6368] md:w-3/4 leading-relaxed text-balance">
                    {bio}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a href="#projects" className="shrink-0">
                        <Button
                            size="lg"
                            withArrow
                            className="rounded-full min-w-[140px] bg-[#625AC4] hover:bg-[#5046A5] text-white border-none"
                        >
                            View Work
                        </Button>
                    </a>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="rounded-full min-w-[140px] bg-[#E6E0F3] text-[#48426D] hover:bg-[#E6E0F3]/80 border-none"
                        >
                            Resume
                        </Button>
                    </a>

                    <div className="flex gap-2 shrink-0">
                        {displayProfile.contact?.github && (
                            <a href={displayProfile.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-[#E6E0F3] hover:bg-[#E6E0F3]/80 transition-colors text-[#48426D] hover:text-[#2D2A4A] shrink-0">
                                <Github size={22} />
                            </a>
                        )}
                        {displayProfile.contact?.linkedin && (
                            <a href={displayProfile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-[#E6E0F3] hover:bg-[#E6E0F3]/80 transition-colors text-[#48426D] hover:text-[#2D2A4A] shrink-0">
                                <Linkedin size={22} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#5F6368] hidden md:block">
                <ArrowDown size={24} />
            </div>

            {/* Animated Emoji */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
                style={{ bottom: 0, right: 0 }}
                className="absolute w-[200px] md:w-[320px] lg:w-[400px] z-0 pointer-events-none"
            >
                {/* Minimal Speech Bubble */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                    className="absolute -top-12 left-1/4 md:left-1/3 bg-[#625AC4] text-white px-4 py-2 rounded-2xl rounded-bl-none shadow-lg text-lg font-bold"
                >
                    Hi!
                </motion.div>

                <motion.img
                    style={{ y }}
                    src="/me_waving.png"
                    alt="Waving Avatar"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                />
            </motion.div>
        </Section>
    );
};
