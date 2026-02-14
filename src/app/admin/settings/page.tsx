
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Loader2 } from "lucide-react";

import { themes } from "@/data/themes";

export default function AdminSettingsPage() {
    const supabase = createClient();
    const [loading, setLoading] = useState(false);
    // Initialize with Earth theme defaults just in case
    const [currentTheme, setCurrentTheme] = useState(themes[0].colors);
    const [selectedThemeId, setSelectedThemeId] = useState(themes[0].id);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        const { data } = await supabase.from("settings").select("value").eq("key", "theme").single();
        if (data?.value) {
            setCurrentTheme(data.value);
            // Try to find which ID matches these colors, or just leave it
            // For now, let's just use the colors.
        }
    };

    const handleThemeSelect = (themeId: string) => {
        const theme = themes.find(t => t.id === themeId);
        if (theme) {
            setSelectedThemeId(themeId);
            setCurrentTheme(theme.colors);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        // Explicitly tell Supabase to check for conflicts on the 'key' column
        // We save the 'currentTheme' object which contains all the color values
        const { error } = await supabase
            .from("settings")
            .upsert({ key: "theme", value: currentTheme }, { onConflict: 'key' });

        if (!error) {
            alert("Theme updated! Refresh your public site to see changes.");
        } else {
            console.error("Error saving theme:", error);
            alert(`Error saving theme: ${error.message}`);
        }
        setLoading(false);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>

            <Card className="p-8">
                <h2 className="text-xl font-bold mb-6">Choose a Theme</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {themes.map((theme) => (
                        <div
                            key={theme.id}
                            onClick={() => handleThemeSelect(theme.id)}
                            className={`
                                cursor-pointer rounded-2xl border-2 p-4 transition-all
                                ${JSON.stringify(currentTheme) === JSON.stringify(theme.colors) ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50'}
                            `}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold">{theme.name}</h3>
                                {JSON.stringify(currentTheme) === JSON.stringify(theme.colors) && (
                                    <div className="h-3 w-3 rounded-full bg-primary" />
                                )}
                            </div>

                            <div className="space-y-3">
                                <div className="grid grid-cols-4 gap-2 h-16">
                                    {/* Group 1: Background */}
                                    <div className="rounded-lg shadow-sm flex items-end justify-center pb-2 text-[10px] font-medium text-muted-foreground" style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }}>
                                        Base
                                    </div>
                                    {/* Group 2: Secondary/Surface */}
                                    <div className="rounded-lg shadow-sm flex items-end justify-center pb-2 text-[10px] font-medium text-foreground" style={{ backgroundColor: theme.colors.card, border: `1px solid ${theme.colors.border}`, color: theme.colors.foreground }}>
                                        Surface
                                    </div>
                                    {/* Group 3: Primary */}
                                    <div className="rounded-lg shadow-sm flex items-end justify-center pb-2 text-[10px] font-medium" style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}>
                                        Primary
                                    </div>
                                    {/* Group 4: Accent */}
                                    <div className="rounded-lg shadow-sm flex items-end justify-center pb-2 text-[10px] font-bold" style={{ backgroundColor: theme.colors.accent, color: theme.colors.accentForeground }}>
                                        Accent
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-8">
                    <Button onClick={handleSave} disabled={loading} size="lg" className="w-full md:w-auto">
                        {loading ? <Loader2 className="animate-spin mr-2" /> : null}
                        Save Theme
                    </Button>
                </div>
            </Card>
        </div>
    );
}
