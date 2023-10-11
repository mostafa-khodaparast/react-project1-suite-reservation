import { PAGE_SIZE } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings(currentPage) {
  let query = supabase
    .from('booking')
    .select('*,cabins(name), guests(fullName, email)', { count: 'exact' })
  //count: 'exact' is a feature of supabase that give the length of data like count command in SQL

  //server side pagination
  //range method is used for server side pagination in supabase
  if (currentPage) {
    const from = (currentPage - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1
    query = query.range(from, to)
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error(error.message)
  }

  return { data, count }
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("booking")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}


export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("booking")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}


export async function deleteBooking(id) {
  const { data, error } = await supabase.from("booking").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
