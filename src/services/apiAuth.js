import supabase from "./supabase";

export async function apiSignUp({ fullname, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullname,
                avatar: ''
            }
        }
    })

    if (error) {
        throw new Error(error.message)
    }
    return data
}


export async function apiAuth({ email, password }) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        throw new Error(error.message)
    }
    return data
}


export async function getCurrentUser() {
    const { data: sessionData } = await supabase.auth.getSession()
    if (!sessionData.session) return null

    const { data, error } = await supabase.auth.getUser()
    if (error) throw new Error(error.message)
    return data?.user
}

export async function logoutUser() {
    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
}