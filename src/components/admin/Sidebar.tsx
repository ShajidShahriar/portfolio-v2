
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderOpen, User, MessageSquare, Settings, LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    };

    const navItems = [
        { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { label: "Projects", href: "/admin/projects", icon: FolderOpen },
        { label: "Profile", href: "/admin/profile", icon: User },
        { label: "Messages", href: "/admin/messages", icon: MessageSquare },
        { label: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card text-card-foreground p-6 flex flex-col">
            <div className="mb-8 px-2">
                <h1 className="text-xl font-bold tracking-tight">Admin Panel</h1>
                <p className="text-sm text-muted-foreground">Manage your portfolio</p>
            </div>

            <nav className="space-y-2 flex-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${isActive
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                }`}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all font-medium mt-auto"
            >
                <LogOut size={20} />
                Sign Out
            </button>
        </aside>
    );
}
