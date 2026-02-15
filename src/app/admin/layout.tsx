
import { Sidebar } from "@/components/admin/Sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-secondary/20">
            <Sidebar />
            <main className="md:ml-64 p-4 md:p-8 min-h-screen pt-20 md:pt-8">
                <div className="max-w-5xl mx-auto space-y-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
