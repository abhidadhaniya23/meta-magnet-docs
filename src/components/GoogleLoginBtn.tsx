import { signInOAuth } from "@/helpers/signIn";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const GoogleLoginBtn = () => {
  return (
    <>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 w-fit"
        onClick={signInOAuth}
      >
        <Image
          width={24}
          height={24}
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          alt="metamask"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
    </>
  );
};

export default GoogleLoginBtn;
