import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import PathNavigator from "@/components/PathNavigator";
import supabase from "@/lib/supabase";
import { navigatorRoutes } from "@/utils/navigatorRoutes";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function SignIn() {
  const [session, setSession] = useState<any>();

  // const handleSignUp = async (e: any) => {
  //   e.preventDefault();
  //   const { data, error } = await supabase.auth.signUp({
  //     email: "abhidadhaniya23@gmail.com",
  //     password: "89gwe418g9e756",
  //   });
  //   console.log(data, error);
  // };
  return (
    <>
      <PathNavigator routes={navigatorRoutes.signIn} />
      <Card color="transparent" shadow={false} className="my-10">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        {/* <form onSubmit={handleSignUp}>
          <div className="mt-10 flex flex-col gap-4">
            <Input size="lg" type="email" label="Email" />
            <Button type="submit">Sign Up</Button>
          </div>
        </form>

        <hr className="my-10 bg-gray-800/30" /> */}

        <div className="my-10">{!session && <GoogleLoginBtn />}</div>
      </Card>
    </>
  );
}
