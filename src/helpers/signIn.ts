import supabase from "@/lib/supabase";

export async function signInOAuth() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}
