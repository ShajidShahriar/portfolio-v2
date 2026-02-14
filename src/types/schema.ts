
export interface Social {
    platform: string;
    url: string;
    icon: string; // lucide-react icon name as string, or we can import the icon component directly if we want
}

export interface Contact {
    email: string;
    linkedin: string;
    github: string;
    twitter?: string;
}

export interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
    tech: string[];
    link?: string;
    featured?: boolean;
}

export interface Experience {
    role: string;
    company: string;
    period: string;
    description?: string;
}

export interface Education {
    school: string;
    degree: string;
    detail: string;
    year: string;
    location: string;
}

export interface Profile {
    name: string;
    title: string;
    bio: string;
    avatar: string; // URL to image
    contact: Contact;
    socials: Social[];
}
