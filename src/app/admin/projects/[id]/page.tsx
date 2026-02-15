
import { createClient } from "@/utils/supabase/server";
import ProjectForm from "@/components/admin/ProjectForm";
import { notFound } from "next/navigation";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const supabase = await createClient();
    const { data: project } = await supabase.from("projects").select("*").eq("id", id).single();

    if (!project) {
        notFound();
    }

    return <ProjectForm initialData={project} isEditing />;
}
