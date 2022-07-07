import { createClient } from '@supabase/supabase-js'
import type { RequestEvent } from '@sveltejs/kit/types/internal';

const supabaseUrl = 'http://localhost:54321';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export async function get() {
    let { data: shades, error } = await supabase
        .from('shades')
        .select('*')

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: shades
    };
}

export async function post({ request }: RequestEvent) {
    const body = await request.json();

    let { data: shade, error } = await supabase
        .from('shades')
        .insert(body)

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: shade
    };
}
