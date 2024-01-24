"use server";

const attend = async (supabase: any) => {
  const { data: profile } = await supabase.from("profiles").select();
};

export default attend;
