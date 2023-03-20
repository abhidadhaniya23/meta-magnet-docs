import supabase from "@/lib/supabase";

export const getUserSession = async () => {
  try {
    const session = await supabase.auth.getUser();
    return session;
  } catch (error) {
    console.log(error);
  }
};
