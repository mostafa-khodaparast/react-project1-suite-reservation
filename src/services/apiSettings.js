import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    throw new Error("تنظیمات دریافت نشد");
  }
  return data;
}


export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    throw new Error("به روزرسانی تنظیمات باخطا مواجه شد");
  }

  return data;
}
