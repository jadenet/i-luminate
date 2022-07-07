import { createClient } from '@supabase/supabase-js'
import type { RequestEvent } from '@sveltejs/kit/types/internal';

const supabaseUrl = 'http://localhost:54321';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export async function get({ params }: RequestEvent) {
    let { data: shade, error } = await supabase
        .from('shades')
        .select('*')
        .eq('id', params.id)
        .maybeSingle()

    if (error) {
        return {
            status: 400,
            body: null
        };
    }

    return {
        body: shade
    };
}

export async function put({ params, request }: RequestEvent) {
    const body = await request.json();

    let { data: shade, error } = await supabase
        .from('shades')
        .update(body)
        .eq('id', params.id)
        .maybeSingle()

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

export async function patch({ params, request }: RequestEvent) {
    const body = await request.json();

    let { data: shade, error } = await supabase
        .from('shades')
        .update(body)
        .eq('id', params.id)
        .maybeSingle()

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

export async function del({ params }: RequestEvent) {
    let { data: shade, error } = await supabase
        .from('shades')
        .delete()
        .eq('id', params.id)
        .maybeSingle()

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
