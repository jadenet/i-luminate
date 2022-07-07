import { createClient } from '@supabase/supabase-js'
import type { RequestEvent } from '@sveltejs/kit/types/internal';

const supabaseUrl = 'http://localhost:54321';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export async function get() {
    let { data: patterns, error } = await supabase
        .from('patterns')
        .select('*')

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: patterns
    };
}

export async function post({ request }: RequestEvent) {
    const body = await request.json();

    let { data: pattern, error } = await supabase
        .from('patterns')
        .insert(body)

    if (error) {
        return {
            status: 400,
            body: error
        };
    }

    return {
        body: pattern
    };
}
