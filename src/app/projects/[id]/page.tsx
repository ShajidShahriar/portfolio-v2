
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Github, Globe } from "lucide-react";
import Link from "next/link";


export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const supabase = createClient();
    const { data: project } = await (await supabase).from("projects").select("*").eq("id", id).single();

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">


            <main className="pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Link href="/#projects">
                        <Button variant="ghost" className="gap-2 -ml-4 text-muted-foreground hover:text-primary">
                            <ArrowLeft size={20} /> Back to Projects
                        </Button>
                    </Link>

                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{project.category}</Badge>
                            {project.is_featured && <Badge variant="success">Featured</Badge>}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">{project.title}</h1>
                    </div>

                    <div className="relative aspect-video w-full rounded-[32px] overflow-hidden bg-muted shadow-2xl">
                        {project.image_url ? (
                            <img src={project.image_url} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground">No Image Available</div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>
                                {/* If we had rich text content, we'd render it here. For now using description as main content */}
                                {project.content && (
                                    <div className="mt-8 pt-8 border-t border-border whitespace-pre-wrap">
                                        {project.content}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 rounded-[32px] bg-secondary/30 space-y-6">
                                <h3 className="font-bold text-xl">Project Links</h3>
                                <div className="space-y-3">
                                    {project.live_link && (
                                        <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button className="w-full gap-2 rounded-full" size="lg">
                                                <Globe size={18} /> Live Demo
                                            </Button>
                                        </a>
                                    )}
                                    {project.github_link && (
                                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button variant="secondary" className="w-full gap-2 rounded-full" size="lg">
                                                <Github size={18} /> Source Code
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-xl">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech_stack?.map((tech: string) => (
                                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
                <p>© {new Date().getFullYear()} Shajid Shahriar. Built with Next.js & Tailwind.</p>
            </footer>
        </div>
    );
}
