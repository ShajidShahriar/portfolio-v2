import React from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Github, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectsProps {
    projects: any[];
}

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <Section id="projects" className="bg-secondary/30">
            <div className="flex flex-col gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Work</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        A selection of projects that showcase my expertise in building scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects?.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                project={project}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground font-medium">{project.category}</p>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech_stack?.slice(0, 3).map((tech: string) => (
                                        <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                                    {project.live_link ? (
                                        <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button className="w-full gap-2 text-xs h-9 bg-[#625AC4] hover:bg-[#5046A5]">
                                                <Globe size={14} /> Live Demo
                                            </Button>
                                        </a>
                                    ) : (
                                        <Link href={`/projects/${project.id}`} className="flex-1">
                                            <Button className="w-full gap-2 text-xs h-9 bg-[#625AC4] hover:bg-[#5046A5]">
                                                View Details <ArrowRight size={14} />
                                            </Button>
                                        </Link>
                                    )}

                                    {project.github_link && (
                                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="outline" className="w-full gap-2 text-xs h-9 border-gray-200 hover:bg-gray-50 text-gray-700">
                                                <Github size={14} /> Source
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </ProjectCard>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
