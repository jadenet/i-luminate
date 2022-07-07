import { createClient } from '@supabase/supabase-js'
import type { RequestEvent } from '@sveltejs/kit/types/internal';

const supabaseUrl = 'http://localhost:54321';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export async function get() {
    let { data: types, error } = await supabase
        .from('types')
        .select('*')

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: types
    };
}

export async function post({ request }: RequestEvent) {
    const body = await request.json();

    let { data: type, error } = await supabase
        .from('types')
        .insert(body)

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: type
    };
}
