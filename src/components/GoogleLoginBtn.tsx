import { signInOAuth } from "@/helpers/signIn";
import { Button } from "@material-tailwind/react";

const GoogleLoginBtn = () => {
  return (
    <>
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3 w-fit mt-3"
        onClick={signInOAuth}
      >
        <img
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
