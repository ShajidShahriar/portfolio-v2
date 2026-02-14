
import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: CardProps) => {
    return (
        <div
            className={`
        bg-card text-card-foreground 
        rounded-[32px]
        p-8
        ${hover ? "transition-all duration-300 hover:bg-card/80" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
