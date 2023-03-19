import Loader from "@/components/Loader";
import PathNavigator from "@/components/PathNavigator";
import supabase from "@/lib/supabase";
import { navigatorRoutes } from "@/utils/navigatorRoutes";
import { pages, priceOfPlans, pricingPlans } from "@/utils/pages";
import { Avatar, Button, Input, Typography } from "@material-tailwind/react";
import { UserResponse } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Account = () => {
  const router = useRouter();
  const getUserSession = async (): Promise<UserResponse> => {
    const user = await supabase.auth.getUser();
    return user;
  };
  useEffect(() => {
    const redirectHandler = async () => {
      const userSession = await getUserSession();
      if (!userSession.data.user) {
        router.push(pages.signIn.path);
      }
    };
    redirectHandler();
  }, []);
  const fetchUserFromDb = async () => {
    const userSession = await getUserSession();
    const user = await supabase
      .from("userdata")
      .select("*")
      .eq("email", userSession.data.user?.email);
    return user.data;
  };

  const getSession = useQuery("userSession", getUserSession);
  const user = useQuery("userQ", fetchUserFromDb);

  const session = getSession.data;
  const userData = user?.data;

  const profilePic = session?.data.user?.user_metadata.avatar_url;
  const replacedProfilePic = profilePic?.includes("=s96")
    ? profilePic.replace("=s96", "=s220")
    : profilePic;

  if (getSession.isLoading || user.isLoading || !userData) return <Loader />;

  return (
    <>
      <PathNavigator routes={navigatorRoutes.account} />
      <div className="flex flex-col items-center gap-3 mt-7 w-11/12 lg:w-96">
        <Avatar
          src={
            replacedProfilePic ||
            "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
          }
          draggable={false}
          className="border border-solid border-gray-400"
          referrerPolicy="no-referrer"
          alt="avatar"
          size="xxl"
          variant="circular"
        />
        <Typography variant="h2">
          {session?.data.user?.user_metadata.full_name}
        </Typography>
        <hr className="bg-gray-800/80 w-full mx-auto" />
        <div className="my-5 flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Input disabled value={userData[0]?.email as string} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="api">API Key</label>
            <Input value={userData[0]?.apiKey as string} disabled />
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="h3" className="-mb-3">
              Subscription
            </Typography>
            <p className="text-base mt-2">
              Plan:{" "}
              {userData[0]?.plan === "free"
                ? `${pricingPlans[0].badge} $${pricingPlans[0].price}/${pricingPlans[0].per}`
                : `${pricingPlans[1].badge} $${pricingPlans[1].price}/${pricingPlans[1].per}`}
            </p>
          </div>
          <Typography variant="h3" className="-mb-3">
            Usage
          </Typography>
          <div className="flex flex-col gap-1">
            <Typography variant="h6">Requests used this period</Typography>
            <Typography variant="h3">
              {userData[0].request}
              <span className="text-base">
                {" "}
                /{" "}
                {userData[0].plan === "free"
                  ? priceOfPlans.free.requestLimit
                  : priceOfPlans.pro.requestLimit}{" "}
              </span>
            </Typography>
            <Typography variant="small">
              <TimeLeft />
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

interface TimeUntilReset {
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeLeft = () => {
  const [timeUntilReset, setTimeUntilReset] = useState<TimeUntilReset | null>(
    null
  );

  useEffect(() => {
    // Get the current date and time
    const now = new Date();

    // Set the target time to 12:00 AM
    const targetTime = new Date();
    targetTime.setHours(0);
    targetTime.setMinutes(0);
    targetTime.setSeconds(0);

    // If the current time is after the target time, add a day to the target time
    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }

    // Calculate the time until the target time
    let timeUntilReset = targetTime.getTime() - now.getTime();

    // Convert milliseconds to hours, minutes, and seconds
    const hoursUntilReset = Math.floor(
      (timeUntilReset / (1000 * 60 * 60)) % 24
    );
    timeUntilReset -= hoursUntilReset * 1000 * 60 * 60;
    const minutesUntilReset = Math.floor((timeUntilReset / (1000 * 60)) % 60);
    timeUntilReset -= minutesUntilReset * 1000 * 60;
    const secondsUntilReset = Math.floor((timeUntilReset / 1000) % 60);

    // Set the remaining time in state
    setTimeUntilReset({
      hours: hoursUntilReset,
      minutes: minutesUntilReset,
      seconds: secondsUntilReset,
    });

    // Update the remaining time every second
    const intervalId = setInterval(() => {
      // Get the current date and time
      const now = new Date();

      // Calculate the time until the target time
      let timeUntilReset = targetTime.getTime() - now.getTime();

      // Convert milliseconds to hours, minutes, and seconds
      const hoursUntilReset = Math.floor(
        (timeUntilReset / (1000 * 60 * 60)) % 24
      );
      timeUntilReset -= hoursUntilReset * 1000 * 60 * 60;
      const minutesUntilReset = Math.floor((timeUntilReset / (1000 * 60)) % 60);
      timeUntilReset -= minutesUntilReset * 1000 * 60;
      const secondsUntilReset = Math.floor((timeUntilReset / 1000) % 60);

      // Set the remaining time in state
      setTimeUntilReset({
        hours: hoursUntilReset,
        minutes: minutesUntilReset,
        seconds: secondsUntilReset,
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  if (!timeUntilReset) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      The API limit will reset in {timeUntilReset.hours} hours,{" "}
      {timeUntilReset.minutes} minutes, and {timeUntilReset.seconds} seconds.
    </div>
  );
};

export default Account;
