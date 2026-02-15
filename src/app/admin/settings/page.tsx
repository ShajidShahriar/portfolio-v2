
"use client";

import { Card } from "@/components/ui/Card";

export default function AdminSettingsPage() {
    // Theme settings have been removed.
    // Future settings logic can be added here.

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>

            <Card className="p-8">
                <h2 className="text-xl font-bold mb-6">General Settings</h2>
                <p className="text-muted-foreground">
                    Theme selection has been disabled. The application now uses the "Purple & Lavender" theme by default.
                </p>
                {/* Future settings can go here */}
            </Card>
        </div>
    );
}
