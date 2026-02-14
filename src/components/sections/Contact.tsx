
"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { createClient } from "@/utils/supabase/client";
import { Loader2, CheckCircle } from "lucide-react";

export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const supabase = createClient();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        const { error } = await supabase.from("messages").insert([
            { name, email, message }
        ]);

        if (error) {
            alert("Failed to send message: " + error.message);
        } else {
            setSent(true);
        }
        setLoading(false);
    };

    return (
        <Section id="contact" className="bg-primary/5">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Work Together</h2>
                    <p className="text-muted-foreground text-lg">
                        Have a project in mind? I'd love to hear about it.
                    </p>
                </div>

                <Card className="text-left bg-card">
                    {sent ? (
                        <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                            <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                            <Button variant="outline" onClick={() => setSent(false)}>Send Another</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        name="name"
                                        id="name"
                                        type="text"
                                        required
                                        className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        name="email"
                                        id="email"
                                        type="email"
                                        required
                                        className="flex h-12 w-full rounded-2xl border-none bg-secondary/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    className="flex min-h-[120px] w-full rounded-2xl border-none bg-secondary/50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <Button className="w-full" size="lg" disabled={loading}>
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    )}
                </Card>
            </div>
        </Section>
    );
};
