
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Card } from "@/components/ui/Card";
import { format } from "date-fns";
import { Mail, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Message {
    id: string;
    name: string;
    email: string;
    message: string;
    created_at: string;
    is_read: boolean;
}

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const { data } = await supabase
            .from("messages")
            .select("*")
            .order("created_at", { ascending: false });

        if (data) setMessages(data);
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this message?")) return;
        const { error } = await supabase.from("messages").delete().eq("id", id);
        if (!error) {
            setMessages(messages.filter(m => m.id !== id));
        }
    };

    if (loading) return <div className="p-8 text-center">Loading messages...</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Messages</h1>

            <div className="space-y-4">
                {messages.map((msg) => (
                    <Card key={msg.id} className="p-6 transition-all hover:bg-secondary/10">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-full text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold">{msg.name}</h3>
                                    <a href={`mailto:${msg.email}`} className="text-sm text-primary hover:underline">{msg.email}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                    {format(new Date(msg.created_at), "MMM d, yyyy • h:mm a")}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-muted-foreground hover:text-red-500"
                                    onClick={() => handleDelete(msg.id)}
                                >
                                    <Trash2 size={16} />
                                </Button>
                            </div>
                        </div>
                        <p className="text-muted-foreground whitespace-pre-wrap pl-14">{msg.message}</p>
                    </Card>
                ))}

                {messages.length === 0 && (
                    <div className="py-12 text-center text-muted-foreground border-2 border-dashed border-border rounded-3xl">
                        <p>No messages yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
