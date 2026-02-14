
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Loader2, Upload } from "lucide-react";

export default function AdminProfilePage() {
    const supabase = createClient();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [profile, setProfile] = useState({
        name: "",
        title: "",
        bio: "",
        image_url: "",
        resume_url: "",
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        // Ideally fetch by user ID, but for single-user portfolio we can just fetch the first record
        // or we assume row level security handles "my profile"
        const { data, error } = await supabase.from("profiles").select("*").single();

        if (data) {
            setProfile(data);
        } else if (error && error.code !== 'PGRST116') { // PGRST116 is "The result contains 0 rows"
            console.error("Error fetching profile:", error);
        }
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'image_url' | 'resume_url') => {
        const file = e.target.files?.[0];
        if (!file) return;

        setSaving(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `${field}-${Math.random()}.${fileExt}`;
        const filePath = `profile/${fileName}`;

        const { error: uploadError } = await supabase.storage.from('portfolio-assets').upload(filePath, file);

        if (uploadError) {
            alert("Upload failed: " + uploadError.message);
            setSaving(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage.from('portfolio-assets').getPublicUrl(filePath);
        setProfile(prev => ({ ...prev, [field]: publicUrl }));
        setSaving(false);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        const { data: existing } = await supabase.from("profiles").select("id").single();

        let error;
        if (existing) {
            const { error: updateError } = await supabase.from("profiles").update(profile).eq("id", existing.id);
            error = updateError;
        } else {
            const { error: insertError } = await supabase.from("profiles").insert([profile]);
            error = insertError;
        }

        if (error) {
            alert("Error saving profile: " + error.message);
        } else {
            alert("Profile updated successfully!");
        }
        setSaving(false);
    };

    if (loading) return <div className="p-8 text-center">Loading profile...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>

            <Card className="p-8">
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <input name="name" value={profile.name} onChange={handleChange} className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2" placeholder="e.g. John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Job Title</label>
                            <input name="title" value={profile.title} onChange={handleChange} className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2" placeholder="e.g. Senior Software Engineer" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Bio</label>
                        <textarea name="bio" value={profile.bio} onChange={handleChange} className="flex min-h-[150px] w-full rounded-2xl border-none bg-secondary/50 px-4 py-3" placeholder="Tell your story..." />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Profile Picture</label>
                            <div className="flex items-center gap-4">
                                {profile.image_url && (
                                    <img src={profile.image_url} alt="Profile" className="w-16 h-16 rounded-full object-cover border border-border" />
                                )}
                                <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full transition-colors">
                                    <Upload size={16} />
                                    <span className="text-sm">Upload Photo</span>
                                    <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(e, 'image_url')} />
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Resume</label>
                            <div className="flex items-center gap-4">
                                {profile.resume_url && (
                                    <a href={profile.resume_url} target="_blank" className="text-sm text-primary underline">View Current Resume</a>
                                )}
                                <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full transition-colors">
                                    <Upload size={16} />
                                    <span className="text-sm">Upload PDF</span>
                                    <input type="file" accept="application/pdf" className="hidden" onChange={(e) => handleUpload(e, 'resume_url')} />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={saving} size="lg">
                            {saving ? <Loader2 className="animate-spin mr-2" /> : null}
                            {saving ? "Saving..." : "Save Profile"}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
