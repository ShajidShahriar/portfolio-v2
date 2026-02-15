
import { Card } from "@/components/ui/Card";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
    const supabase = await createClient();

    // Fetch Projects Count
    const { count: projectCount } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });

    // Fetch Messages Count
    // Assuming 'read' column exists, otherwise just count all
    const { count: messageCount } = await supabase
        .from("messages")
        .select("*", { count: "exact", head: true });
    // .eq("read", false); // Uncomment if 'read' column exists

    // Fetch Profile Views
    // Assuming 'views' column exists in 'profiles' table
    const { data: profile } = await supabase
        .from("profiles")
        .select("views")
        .single();

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Admin.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:border-primary/50 transition-colors bg-white dark:bg-[#1F2229] border-gray-100 dark:border-white/10 shadow-sm p-6">
                    <h3 className="text-lg font-medium mb-2 text-foreground">Total Projects</h3>
                    <p className="text-4xl font-bold text-primary">{projectCount || 0}</p>
                    <p className="text-sm text-muted-foreground mt-2">Active projects in portfolio</p>
                </Card>

                <Card className="hover:border-primary/50 transition-colors bg-white dark:bg-[#1F2229] border-gray-100 dark:border-white/10 shadow-sm p-6">
                    <h3 className="text-lg font-medium mb-2 text-foreground">Total Messages</h3>
                    <p className="text-4xl font-bold text-primary">{messageCount || 0}</p>
                    <p className="text-sm text-muted-foreground mt-2">Inquiries received</p>
                </Card>

                <Card className="hover:border-primary/50 transition-colors bg-white dark:bg-[#1F2229] border-gray-100 dark:border-white/10 shadow-sm p-6">
                    <h3 className="text-lg font-medium mb-2 text-foreground">Profile Views</h3>
                    <p className="text-4xl font-bold text-primary">{profile?.views || 0}</p>
                    <p className="text-sm text-muted-foreground mt-2">Total profile visits</p>
                </Card>
            </div>

        </div>
    );
}
