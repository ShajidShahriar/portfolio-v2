
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    category: string;
    image_url: string;
}

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from("projects")
            .select("id, title, category, image_url")
            .order("created_at", { ascending: false });

        if (data) setProjects(data);
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;

        const { error } = await supabase.from("projects").delete().eq("id", id);
        if (!error) {
            setProjects(projects.filter((p) => p.id !== id));
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
                <Link href="/admin/projects/new">
                    <Button className="gap-2">
                        <Plus size={18} />
                        Add Project
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Card key={project.id} className="group flex flex-col overflow-hidden p-0 border-border/50">
                        <div className="relative aspect-video w-full bg-muted">
                            {project.image_url ? (
                                <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
                            )}
                        </div>
                        <div className="p-4 flex flex-col flex-1 gap-4">
                            <div>
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.category}</p>
                            </div>

                            <div className="mt-auto flex gap-2">
                                <Link href={`/admin/projects/${project.id}`} className="flex-1">
                                    <Button variant="outline" size="sm" className="w-full gap-2">
                                        <Pencil size={16} /> Edit
                                    </Button>
                                </Link>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-500 hover:text-red-600 hover:bg-red-500/10 px-3"
                                    onClick={() => handleDelete(project.id)}
                                >
                                    <Trash2 size={16} />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}

                {projects.length === 0 && (
                    <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed border-border rounded-3xl">
                        <p>No projects found. Create your first one!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
