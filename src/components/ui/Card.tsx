
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    noPadding?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, className = "", hover = true, noPadding = false, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`
        bg-card text-card-foreground 
        rounded-[32px]
        ${noPadding ? "p-0" : "p-8"}
        ${hover ? "transition-all duration-300 hover:bg-card/80" : ""}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = "Card";
