import GoogleLoginBtn from "@/components/GoogleLoginBtn";
import PathNavigator from "@/components/PathNavigator";
import { navigatorRoutes } from "@/utils/navigatorRoutes";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function SignIn() {
  const [session, setSession] = useState<any>();
  return (
    <>
      <PathNavigator routes={navigatorRoutes.docs} />
      <Card color="transparent" shadow={false} className="my-20">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>

        {!session && <GoogleLoginBtn />}
      </Card>
    </>
  );
}
