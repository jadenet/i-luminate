import { createClient } from '@supabase/supabase-js'
import type { RequestEvent } from '@sveltejs/kit/types/internal';

const supabaseUrl = 'http://localhost:54321';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export async function get() {
    let { data: colors, error } = await supabase
        .from('colors')
        .select('*')

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: colors
    };
}

export async function post({ request }: RequestEvent) {
    const body = await request.json();

    let { data: color, error } = await supabase
        .from('colors')
        .insert(body)

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: color
    };
}
