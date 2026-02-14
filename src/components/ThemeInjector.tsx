
"use client";

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function ThemeInjector() {
    const supabase = createClient();

    useEffect(() => {
        const fetchTheme = async () => {
            const { data, error } = await supabase.from("settings").select("value").eq("key", "theme").single();

            if (error) {
                console.error("ThemeInjector: Error fetching theme:", error);
                return;
            }

            console.log("ThemeInjector: Fetched theme:", data?.value);

            if (data?.value) {
                const root = document.documentElement;
                // Map camelCase keys to kebab-case css variables
                // e.g. primaryForeground -> --primary-foreground
                Object.entries(data.value).forEach(([key, value]) => {
                    if (typeof value === 'string') {
                        const cssVar = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
                        root.style.setProperty(cssVar, value);
                    }
                });
            }
        };
        fetchTheme();
    }, []);

    return null;
}
