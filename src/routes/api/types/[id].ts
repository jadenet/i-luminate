import { createClient } from '@supabase/supabase-js'
import type { RequestEvent } from '@sveltejs/kit/types/internal';

const supabaseUrl = 'http://localhost:54321';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey!);

export async function get({ params }: RequestEvent) {
    let { data: type, error } = await supabase
        .from('types')
        .select('*')
        .eq('id', params.id)
        .maybeSingle()

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

export async function put({ params, request }: RequestEvent) {
    const body = await request.json();

    let { data: type, error } = await supabase
        .from('types')
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
        body: type
    };
}

export async function patch({ params, request }: RequestEvent) {
    const body = await request.json();

    let { data: type, error } = await supabase
        .from('types')
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
        body: type
    };
}

export async function del({ params }: RequestEvent) {
    let { data: type, error } = await supabase
        .from('types')
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
        body: type
    };
}
