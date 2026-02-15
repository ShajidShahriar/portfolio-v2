
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button"; // Assuming this exists or using standard button
import { X, ExternalLink, Github, Pencil, Trash2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge"; // Assuming Badge exists

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image_url: string;
    github_link?: string;
    live_link?: string;
    tech_stack?: string[];
}

interface ProjectPreviewModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
    onDelete: (id: string) => Promise<void>;
}

export const ProjectPreviewModal = ({ project, isOpen, onClose, onDelete }: ProjectPreviewModalProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    if (!project) return null;

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        setIsDeleting(true);
        await onDelete(project.id);
        setIsDeleting(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            layoutId={`project-card-${project.id}`} // consistent with card layoutId if we add it there
                            className="w-full max-w-3xl bg-card rounded-[32px] shadow-2xl overflow-y-auto pointer-events-auto max-h-[90vh] block"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="relative aspect-video w-full bg-muted">
                                {project.image_url ? (
                                    <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">No Image</div>
                                )}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-4 right-4 z-50 rounded-full bg-neutral-900/50 hover:bg-neutral-900/70 text-white backdrop-blur-sm"
                                    onClick={onClose}
                                >
                                    <X size={20} className="text-white" />
                                </Button>
                            </div>

                            <div className="p-8 flex flex-col gap-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-2xl font-bold">{project.title}</h2>
                                        <p className="text-muted-foreground">{project.category}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github_link && (
                                            <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                                <Button variant="secondary" size="icon" className="rounded-full shadow-sm bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                    <Github size={20} />
                                                </Button>
                                            </a>
                                        )}
                                        {project.live_link && (
                                            <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                                <Button variant="secondary" size="icon" className="rounded-full shadow-sm bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                    <ExternalLink size={20} />
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-lg">Description</h3>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                        {project.description || "No description provided."}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-semibold text-lg">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech_stack?.map((tech) => (
                                            <Badge key={tech} variant="secondary">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4 pt-6 border-t border-border">
                                    <Link href={`/admin/projects/${project.id}`} className="flex-1">
                                        <Button className="w-full gap-2" size="lg">
                                            <Pencil size={18} /> Edit Project
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="gap-2 bg-red-500 text-white hover:bg-red-600 hover:text-white"
                                        onClick={handleDelete}
                                        disabled={isDeleting}
                                    >
                                        {isDeleting ? <Loader2 className="animate-spin" /> : <Trash2 size={18} />}
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
