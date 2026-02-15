
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Upload, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const AddProjectModal = ({ isOpen, onClose, onSuccess }: AddProjectModalProps) => {
    const router = useRouter();
    const supabase = createClient();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        image_url: "",
        github_link: "",
        live_link: "",
        tech_stack: "",
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
            .from('portfolio-assets')
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

        const { error } = await supabase.from("projects").insert([payload]);

        if (error) {
            alert("Error saving project: " + error.message);
        } else {
            // Reset form
            setFormData({
                title: "",
                category: "",
                description: "",
                image_url: "",
                github_link: "",
                live_link: "",
                tech_stack: "",
            });
            onSuccess();
            onClose();
            router.refresh();
        }
        setLoading(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            layoutId="add-project-card"
                            className="w-full max-w-2xl bg-card rounded-[32px] shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <h2 className="text-2xl font-bold">New Project</h2>
                                <Button variant="ghost" size="sm" onClick={onClose}>
                                    <X size={24} />
                                </Button>
                            </div>

                            <div className="p-8 overflow-y-auto">
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
                                        <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
                                        <Button type="submit" disabled={loading}>
                                            {loading ? <Loader2 className="animate-spin" /> : "Create Project"}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
