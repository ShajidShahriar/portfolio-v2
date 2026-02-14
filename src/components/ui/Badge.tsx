
import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "secondary" | "outline" | "success" | "neutral";
}

export const Badge = ({ children, className = "", variant = "secondary" }: BadgeProps) => {
    const variants = {
        default: "bg-primary text-primary-foreground border-transparent hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/80",
        outline: "text-foreground border-border",
        // New Status Variants based on screenshot
        success: "bg-[#CEF0D5] text-[#1E5227] border-transparent font-semibold shadow-sm", // Solid pastel green, dark green text
        neutral: "bg-zinc-100 text-zinc-800 border-transparent dark:bg-zinc-800 dark:text-zinc-300",
    };

    return (
        <span
            className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
};
