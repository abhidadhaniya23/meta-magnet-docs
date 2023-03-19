import { pages } from "@/utils/pages";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col gap-20 lg:gap-0 lg:flex-row justify-between items-center py-10">
        <div className="flex flex-col gap-7">
          <Typography
            variant="h1"
            color="blue-gray"
            className="text-3xl lg:text-4xl"
          >
            Power Your Applications with Intelligent Metadata
          </Typography>
          <p className="-mt-3">
            Meta magnet API service provides a powerful and versatile solution
            for developers looking to access rich metadata from any URL.
          </p>
          <div className="flex gap-4">
            <Link href={pages.account.path}>
              <Button variant="outlined" className="w-fit">
                Get A Free API Key
              </Button>
            </Link>
            <Link href={pages.docs.path}>
              <Button variant="gradient" className="w-fit">
                Docs
              </Button>
            </Link>
          </div>
        </div>
        <Image
          // src="https://urlmeta.org/dist/images/news.svg"
          src="/images/hero.svg"
          alt="hero"
          width={700}
          height={700}
          draggable={false}
          className="lg:w-[50%] w-11/12 h-full object-cover shadow-2xl rounded-xl"
        />
      </section>
    </>
  );
};

export default HeroSection;
