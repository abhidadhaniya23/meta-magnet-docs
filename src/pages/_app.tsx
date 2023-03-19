import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@material-tailwind/react";
import Layout from "@/components/Layout";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "react-query";
import supabase from "@/lib/supabase";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      // console.log(event);
      if (event === "SIGNED_IN") {
        // console.log(event);
        supabase
          .from("userdata")
          .select("*")
          .eq("email", session?.user.email)
          .then((res) => {
            // console.log(res);
            if (res?.data?.length === 0) {
              supabase.from("userdata").insert([
                {
                  email: session?.user.email,
                },
              ]);
            }
          });
      }
    });
  }, []);
  return (
    <>
      <Toaster position="bottom-right" />
      <NextNProgress color="#fff" height={3} />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
