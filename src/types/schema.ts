
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
    // URL to image (used in AdminProfilePage as image_url, but code says avatar in schema.ts? 
    // Let's check usage. AdminProfilePage uses image_url. content.ts uses avatar. 
    // Let's add both or standardize. AdminProfilePage uses image_url. Hero uses avatar from content.ts default, but checks profile.
    // Let's add all likely fields.)
    avatar?: string;
    image_url?: string;
    resume_url?: string;
    contact: Contact;
    socials: Social[];
    // Add missing fields if any
    id?: string;
}
