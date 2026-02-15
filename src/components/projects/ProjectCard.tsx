"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { motion, HTMLMotionProps } from "framer-motion";

const MotionCard = motion(Card);

interface ProjectCardProps extends HTMLMotionProps<"div"> {
    project: {
        title: string;
        image_url?: string;
    };
    children: React.ReactNode;
    className?: string;
    noPadding?: boolean;
}

export const ProjectCard = ({ project, children, className = "", noPadding = false, ...props }: ProjectCardProps) => {
    return (
        <MotionCard
            className={`flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${className}`}
            hover={false} // Disable default Card hover to use motion hover
            noPadding={true}
            {...props}
        >
            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-violet-50 to-indigo-50 p-8 flex items-center justify-center">
                {project.image_url ? (
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
                )}
            </div>

            <div className="p-6 flex flex-col flex-1 gap-4">
                {children}
            </div>
        </MotionCard>
    );
};
