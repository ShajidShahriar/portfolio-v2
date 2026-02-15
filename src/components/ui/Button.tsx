
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "secondary";
    size?: "sm" | "md" | "lg" | "icon";
    withArrow?: boolean;
}

export const Button = ({
    children,
    className = "",
    variant = "default",
    size = "md",
    withArrow = false,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap";

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-8 py-2 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10 p-0",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
            {withArrow && <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
        </button>
    );
};
