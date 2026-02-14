
import React from "react";
import { profile } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";


interface HeroProps {
    profile: any;
}

export const Hero = ({ profile }: HeroProps) => {
    const name = profile?.name || "Shajid Shahriar";
    const title = profile?.title || "Frontend Engineer";
    const bio = profile?.bio || "Building accessible, pixel-perfect web experiences.";
    const resumeUrl = profile?.resume_url || "#";

    return (
        <Section className="min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-3xl space-y-8">
                <div className="space-y-4">
                    <Badge variant="success" className="px-4 py-1.5 text-sm">
                        Available for projects
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
                        {name}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-medium text-muted-foreground text-balance">
                        {title}
                    </h2>
                </div>

                <p className="text-xl text-muted-foreground md:w-3/4 leading-relaxed text-balance">
                    {bio}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#projects">
                        <Button size="lg" withArrow className="rounded-full">
                            View Work
                        </Button>
                    </a>
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-full">
                            Resume
                        </Button>
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hidden md:block">
                <ArrowDown size={24} />
            </div>
        </Section>
    );
};
