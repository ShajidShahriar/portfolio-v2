
import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { createClient } from "@/utils/supabase/server";

export default async function Portfolio() {
  const supabase = await createClient();

  // Fetch Profile
  const { data: profile } = await supabase.from("profiles").select("*").single();

  // Fetch Projects
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("order", { ascending: true })
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex flex-col">
        <Hero profile={profile} />
        {/* Pass projects prop. If null, component handles it (which we verified it does with optional chaining) */}
        <Projects projects={projects || []} />
        <div id="experience">
          <Experience />
        </div>
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Shajid Shahriar. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}