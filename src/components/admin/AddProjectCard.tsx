
import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface AddProjectCardProps {
    onClick: () => void;
}

export const AddProjectCard = ({ onClick }: AddProjectCardProps) => {
    return (
        <motion.div
            layoutId="add-project-card"
            className="flex flex-col h-full min-h-[300px] border-2 border-dashed border-border hover:border-primary/50 bg-transparent rounded-[32px] items-center justify-center cursor-pointer group transition-colors"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                <Plus size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="font-semibold text-lg text-muted-foreground group-hover:text-primary transition-colors">Add New Project</p>
        </motion.div>
    );
};
