
"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export default function ProjectForm({ initialData, isEditing = false }: ProjectFormProps) {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        category: initialData?.category || "",
        description: initialData?.description || "",
        image_url: initialData?.image_url || "",
        github_link: initialData?.github_link || "",
        live_link: initialData?.live_link || "",
        tech_stack: initialData?.tech_stack?.join(", ") || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `projects/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('portfolio-assets') // Make sure this bucket exists in Supabase
            .upload(filePath, file);

        if (uploadError) {
            alert("Error uploading image: " + uploadError.message);
            setLoading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage.from('portfolio-assets').getPublicUrl(filePath);
        setFormData({ ...formData, image_url: publicUrl });
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const techStackArray = formData.tech_stack.split(",").map((t: string) => t.trim()).filter(Boolean);

        const payload = {
            title: formData.title,
            category: formData.category,
            description: formData.description,
            image_url: formData.image_url,
            github_link: formData.github_link,
            live_link: formData.live_link,
            tech_stack: techStackArray,
        };

        let error;
        if (isEditing) {
            const { error: updateError } = await supabase
                .from("projects")
                .update(payload)
                .eq("id", initialData.id);
            error = updateError;
        } else {
            const { error: insertError } = await supabase
                .from("projects")
                .insert([payload]);
            error = insertError;
        }

        if (error) {
            alert("Error saving project: " + error.message);
        } else {
            router.push("/admin/projects");
            router.refresh();
        }
        setLoading(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/projects">
                    <Button variant="ghost" size="sm" className="gap-2">
                        <ArrowLeft size={16} /> Back
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold">{isEditing ? "Edit Project" : "New Project"}</h1>
            </div>

            <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title</label>
                            <input name="title" value={formData.title} onChange={handleChange} required className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2" placeholder="Project Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <input name="category" value={formData.category} onChange={handleChange} required className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2" placeholder="e.g. Web App, Mobile App" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} required className="flex min-h-[100px] w-full rounded-2xl border-none bg-secondary/50 px-4 py-3" placeholder="Project description..." />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Project Image</label>
                        <div className="flex items-center gap-4">
                            {formData.image_url && (
                                <div className="relative w-32 h-20 rounded-xl overflow-hidden bg-muted">
                                    <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                            <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full transition-colors">
                                <Upload size={16} />
                                <span className="text-sm font-medium">Upload Image</span>
                                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                            </label>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">GitHub Link</label>
                            <input name="github_link" value={formData.github_link} onChange={handleChange} className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2" placeholder="https://github.com/..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Live Demo Link</label>
                            <input name="live_link" value={formData.live_link} onChange={handleChange} className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2" placeholder="https://..." />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Tech Stack (comma separated)</label>
                        <input name="tech_stack" value={formData.tech_stack} onChange={handleChange} className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2" placeholder="React, Next.js, Supabase" />
                    </div>

                    <div className="pt-4 flex justify-end gap-4">
                        <Link href="/admin/projects">
                            <Button type="button" variant="outline">Cancel</Button>
                        </Link>
                        <Button type="submit" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin" /> : (isEditing ? "Save Changes" : "Create Project")}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
