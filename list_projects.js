
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function listProjects() {
    const { data, error } = await supabase.from('projects').select('id, title');
    if (error) console.error(error);
    else console.log(data);
}

listProjects();
