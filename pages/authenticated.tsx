import React from "react";
import { NextPage } from "next";
import BannerTop from "../src/components/BannerTop";
import TextField from "../src/components/reusables/TextField";
import BannerBottom from "../src/components/BannerBottom";
import Button from "../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";

import Link from "next/link";

const Authenticated: NextPage = () => {
  return (
    <main className="h-screen flex flex-col justify-between ">
      <BannerTop />
      <section className="flex flex-col items-center justify-center px-5 lg:w-[30vw] md:w-[40vw] sm:w-[50vw] mx-auto ">
        <img
          className="animate-bounce"
          src="/static/images/celebration.svg"
          alt=""
        />
        <h1 className="font-semibold text-primary text-xl text-center my-2">
          Your mail has been successfully authenticated
        </h1>
        <p className="text-center my-2 text-gray-dark">
          Click to go to your account now
        </p>
        <Link href={"/dashboard"}>
          <Button
            icon={<CgArrowLongRight />}
            className="my-1"
            color="primary"
            variant="contained"
          />
        </Link>
      </section>
      <BannerBottom></BannerBottom>
    </main>
  );
};

export default Authenticated;
