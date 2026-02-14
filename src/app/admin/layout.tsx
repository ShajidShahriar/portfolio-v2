
import { Sidebar } from "@/components/admin/Sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-secondary/20">
            <Sidebar />
            <main className="ml-64 p-8 min-h-screen">
                <div className="max-w-5xl mx-auto space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
