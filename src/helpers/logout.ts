import supabase from "@/lib/supabase";

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  // refresh the window once the user is logged out
  window.location.href = "/";
};
