import supabase from "@/lib/supabase";

export const getUserSession = async () => {
  const session = await supabase.auth.getUser();
  return session;
};
