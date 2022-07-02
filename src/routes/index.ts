import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'http://localhost:54321'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey!)
const loggedIn: boolean = false;

export async function get() {
    let {data: items, error} = await supabase
        .from('colors')
        .select('*')
    
    if (items) {
        return {
            body: {items}
        };
    }
    
    return {
        status: 404
    };
}

export async function saveSelection() {
    if (!loggedIn) {
        let saved = localStorage.getItem("saved");
        
    }
}