
import { createClient } from "@/utils/supabase/server";
import ProjectForm from "@/components/admin/ProjectForm";
import { notFound } from "next/navigation";

export default async function EditProjectPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { data: project } = await supabase.from("projects").select("*").eq("id", params.id).single();

    if (!project) {
        notFound();
    }

    return <ProjectForm initialData={project} isEditing />;
}
