
import React from "react";
import { education } from "@/data/content";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export const Experience = () => {
    return (
        <Section className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Education Column */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Academic Journey</h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <Card key={index} className="relative hover:bg-card/90 transition-all">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold">{edu.school}</h3>
                                        <Badge variant="outline">{edu.year}</Badge>
                                    </div>
                                    <p className="text-lg font-medium text-primary">{edu.degree}</p>
                                    {/* ... */}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Experience Column */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
                    <Card className="flex flex-col justify-center items-center h-64 text-center space-y-4 bg-secondary/10">
                        <p className="text-muted-foreground font-medium">Open for opportunities</p>
                        {/* ... */}
                    </Card>
                </div>
            </div>
        </Section>
    );
};
