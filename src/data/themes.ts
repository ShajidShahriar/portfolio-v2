
export interface Theme {
    id: string;
    name: string;
    colors: {
        background: string;
        foreground: string;
        card: string;
        cardForeground: string;
        primary: string;
        primaryForeground: string;
        secondary: string;
        secondaryForeground: string;
        muted: string;
        mutedForeground: string;
        accent: string;
        accentForeground: string;
        border: string;
        input: string;
        ring: string;
    };
}

export const themes: Theme[] = [
    {
        id: "earth",
        name: "Earth & Clay",
        colors: {
            // Group 1: Base/Surface (Dark Warm Brown)
            background: "#1C1917",
            foreground: "#F5F5F4",
            card: "#292524",
            cardForeground: "#F5F5F4",

            // Group 2: Primary (Terracotta/Burnt Orange)
            primary: "#EA580C",
            primaryForeground: "#FFFFFF",

            // Group 3: Secondary (Sand/Beige often used for muted elements)
            secondary: "#44403C",
            secondaryForeground: "#F5F5F4",
            muted: "#44403C",
            mutedForeground: "#A8A29E",

            // Group 4: Accent (Warm Peach/Gold)
            accent: "#FDBA74",
            accentForeground: "#292524",

            border: "#44403C",
            input: "#44403C",
            ring: "#EA580C",
        }
    },
    {
        id: "nature",
        name: "Forest & Sage",
        colors: {
            // Group 1: Base (Very Dark Green)
            background: "#052e16",
            foreground: "#ecfccb",
            card: "#14532d",
            cardForeground: "#ecfccb",

            // Group 2: Primary (Vibrant Leaf Green)
            primary: "#65a30d",
            primaryForeground: "#FFFFFF",

            // Group 3: Secondary (Deep Moss)
            secondary: "#1a2e05",
            secondaryForeground: "#ecfccb",
            muted: "#365314",
            mutedForeground: "#bef264",

            // Group 4: Accent (Lime/Citrus)
            accent: "#84cc16",
            accentForeground: "#1a2e05",

            border: "#365314",
            input: "#365314",
            ring: "#65a30d",
        }
    },
    {
        id: "floral",
        name: "Rose & Wine",
        colors: {
            // Group 1: Base (Dark Plum/Wine)
            background: "#2e0209",
            foreground: "#ffe4e6",
            card: "#4c0519",
            cardForeground: "#ffe4e6",

            // Group 2: Primary (Soft Rose)
            primary: "#e11d48",
            primaryForeground: "#FFFFFF",

            // Group 3: Secondary (Muted Mauve)
            secondary: "#500724",
            secondaryForeground: "#ffe4e6",
            muted: "#831843",
            mutedForeground: "#fbcfe8",

            // Group 4: Accent (Blush Pink)
            accent: "#fb7185",
            accentForeground: "#4c0519",

            border: "#831843",
            input: "#831843",
            ring: "#e11d48",
        }
    },
    {
        id: "ocean",
        name: "Deep Ocean",
        colors: {
            // Group 1: Base (Navy Black)
            background: "#020617",
            foreground: "#e2e8f0",
            card: "#0f172a",
            cardForeground: "#e2e8f0",

            // Group 2: Primary (Cyan/Blue)
            primary: "#0ea5e9",
            primaryForeground: "#FFFFFF",

            // Group 3: Secondary (Slate Blue)
            secondary: "#1e293b",
            secondaryForeground: "#e2e8f0",
            muted: "#334155",
            mutedForeground: "#94a3b8",

            // Group 4: Accent (Teal/Turquoise)
            accent: "#2dd4bf",
            accentForeground: "#0f172a",

            border: "#1e293b",
            input: "#1e293b",
            ring: "#0ea5e9",
        }
    }
];
