
import React from "react";
import { projects } from "@/data/content";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";


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
                            <Card key={index} className="flex flex-col h-full bg-card group p-0 overflow-hidden hover:bg-card/90 transition-colors">

                                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                    {project.image_url ? (
                                        <img
                                            src={project.image_url}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-sm text-muted-foreground">{project.category}</p>
                                        </div>
                                        {/* Link to detail page instead of external link immediately? Or external link as before. 
                                        User asked for "project details page with details". 
                                        So we should link to /projects/[id] unless it's a direct link demand. 
                                        Let's link to internal detail page, which will have the github/live links. 
                                    */}
                                        <a href={`/projects/${project.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech_stack?.map((tech: string) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
