
import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => {
    return (
        <section id={id} className={`py-12 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {children}
            </div>
        </section>
    );
};
