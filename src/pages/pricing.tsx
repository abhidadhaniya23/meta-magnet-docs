import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PathNavigator from "@/components/PathNavigator";
import { navigatorRoutes } from "@/utils/navigatorRoutes";
import { pricingPlans } from "@/utils/pages";

export default function Pricing() {
  return (
    <>
      <PathNavigator routes={navigatorRoutes.pricing} />
      <Typography variant="h1" className="text-center my-10">
        Pricing Plans
      </Typography>
      <div className="flex flex-col md:flex-row gap-10 my-10">
        {pricingPlans.map((card, index) => (
          <Card
            key={index}
            color={card.color as any}
            variant="gradient"
            className="w-full max-w-[20rem] p-8 h-fit"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-bold uppercase"
              >
                {card.badge}
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-semibold"
              >
                <span className="mt-2 text-4xl">$</span>
                {card.price}{" "}
                <span className="self-end text-4xl">/{card.per}</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                {card.features.map((feature, index) => (
                  <li className="flex items-center gap-4" key={index}>
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon strokeWidth={2} className="h-3 w-3" />
                    </span>
                    <Typography className="font-normal">{feature}</Typography>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Link href={card.buttonAction} target={card.target}>
                <Button
                  size="lg"
                  color="white"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                  fullWidth={true}
                >
                  {card.button}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
