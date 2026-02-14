
import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Admin.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-medium mb-2">Total Projects</h3>
                    <p className="text-4xl font-bold text-primary">0</p>
                    <p className="text-sm text-muted-foreground mt-2">Active projects in portfolio</p>
                </Card>

                <Card className="hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-medium mb-2">Unread Messages</h3>
                    <p className="text-4xl font-bold text-primary">0</p>
                    <p className="text-sm text-muted-foreground mt-2">New inquiries</p>
                </Card>

                <Card className="hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-medium mb-2">Profile Views</h3>
                    <p className="text-4xl font-bold text-primary">-</p>
                    <p className="text-sm text-muted-foreground mt-2">Analytics integration pending</p>
                </Card>
            </div>

        </div>
    );
}
