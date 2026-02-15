
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { AddProjectCard } from "@/components/admin/AddProjectCard";
import { AddProjectModal } from "@/components/admin/AddProjectModal";
import { ProjectPreviewModal } from "@/components/admin/ProjectPreviewModal";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    category: string;
    image_url: string;
    description: string;
    github_link?: string;
    live_link?: string;
    tech_stack?: string[];
}

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false });

        if (data) setProjects(data);
        setLoading(false);
    };

    const handleProjectAdded = () => {
        fetchProjects();
        setIsModalOpen(false);
    };

    const handleDelete = async (id: string) => {
        const { error } = await supabase.from("projects").delete().eq("id", id);
        if (!error) {
            setProjects(projects.filter((p) => p.id !== id));
            setSelectedProject(null); // Close modal if open
        } else {
            alert("Error deleting project");
        }
    };

    if (loading) return <div className="p-8 text-center text-muted-foreground">Loading projects...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                    <p className="text-muted-foreground">Manage your portfolio projects</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AddProjectCard onClick={() => setIsModalOpen(true)} />

                {projects.map((project) => (
                    <div key={project.id}>
                        <ProjectCard
                            project={project}
                            onClick={() => setSelectedProject(project)}
                            layoutId={`project-card-${project.id}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="cursor-pointer h-full"
                        >
                            <div>
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.category}</p>
                            </div>
                        </ProjectCard>
                    </div>
                ))}
            </div>

            <AddProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={handleProjectAdded}
            />

            <ProjectPreviewModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                onDelete={handleDelete}
            />
        </div>
    );
}
