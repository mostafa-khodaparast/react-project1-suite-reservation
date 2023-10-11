import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('*')
    if (error) {
        throw new Error('دریافت سوئیت ها باخطا مواجه شد')
    }
    return data
}

export async function createEditCabins(newCabin, id) {
    //create cabin
    if (!id) {
        const { data, error } = await supabase
        await supabase
            .from('cabins')
            .insert([newCabin])
        if (error) {
            throw new Error('ایجاد سوئیت جدید باخطا مواجه شد')
        }
        return data
    }
    //edit cabin
    else {
        const { data, error } = await supabase
        await supabase
            .from('cabins')
            .update({ ...newCabin })
            .eq('id', id)
        if (error) {
            throw new Error('ویرایش سوئیت باخطا مواجه شد ')
        }
        return data
    }

}


export async function deleteCabins(id) {
    const { error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)
    if (error) {
        throw new Error('حذف سوئیت باخطا مواجه شد')
    }
}