"use client";

import React from "react";
import { education, skills } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import {
    Atom, Layers, Server, FileCode, Wind, Database, FileJson, Cpu,
    Move, GitBranch, Container, GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
    Atom,
    Layers,
    Server,
    FileCode,
    Wind,
    Database,
    FileJson,
    Cpu,
    Move,
    GitBranch,
    Container,
};

const SkillCluster = ({ title, items, delay = 0 }: { title: string, items: typeof skills.frontend, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group"
    >
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-400 rounded-full inline-block" />
            {title}
        </h3>
        <div className="flex flex-wrap gap-3">
            {items.map((skill, idx) => {
                const Icon = iconMap[skill.icon] || FileCode;
                return (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#E8DEF8] text-[#1C1B1F] rounded-xl hover:shadow-md transition-all cursor-default"
                    >
                        <Icon size={18} className="text-[#625AC4]" />
                        <span className="text-sm font-semibold">{skill.name}</span>
                    </motion.div>
                );
            })}
        </div>
    </motion.div>
);

export const Experience = () => {
    return (
        <Section className="overflow-hidden bg-[#FDFBFF]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Academic Journey Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm h-full"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-4 text-gray-900">
                        <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
                            <GraduationCap size={32} />
                        </div>
                        Academic Journey
                    </h2>

                    <div className="relative space-y-12">
                        {/* Gradient Timeline Line */}
                        <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent" />

                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-16 group">
                                {/* Icon Node */}
                                <div className="absolute left-0 top-0 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm z-10 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{edu.school}</h3>
                                        <Badge variant="secondary" className="bg-[#E8DEF8] text-[#1C1B1F] hover:bg-[#E8DEF8]/80">{edu.year}</Badge>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700">{edu.degree}</p>
                                    <p className="text-gray-500">{edu.detail}</p>
                                    <p className="text-sm text-gray-400">{edu.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-100 shadow-sm h-full"
                >
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">What I Build With</h2>
                        <p className="text-gray-500">Tools and technologies I use to bring ideas to life.</p>
                    </div>

                    <div className="space-y-10">
                        <SkillCluster title="Frontend & UI" items={skills.frontend} delay={0.1} />
                        <SkillCluster title="Backend & Infrastructure" items={skills.backend} delay={0.2} />
                        <SkillCluster title="AI & Tools" items={skills.tools} delay={0.3} />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
