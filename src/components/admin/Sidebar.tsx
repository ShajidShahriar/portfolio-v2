"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderOpen, User, MessageSquare, Settings, LogOut, Menu, X } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();
    const [isOpen, setIsOpen] = useState(false);

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

    const renderNavContent = () => (
        <>
            <div className="mb-8 px-2 md:block hidden">
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
                            onClick={() => setIsOpen(false)}
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
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all font-medium mt-auto w-full text-left"
            >
                <LogOut size={20} />
                Sign Out
            </button>
        </>
    );

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-card z-50 flex items-center justify-between px-6">
                <div>
                    <h1 className="font-bold tracking-tight">Admin Panel</h1>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden fixed top-16 left-0 right-0 bg-card border-b border-border z-40 overflow-hidden"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            {renderNavContent()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 border-r border-border bg-card text-card-foreground p-6 flex-col">
                {renderNavContent()}
            </aside>
        </>
    );
}
