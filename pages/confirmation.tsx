import React from "react";
import { NextPage } from "next";
import BannerTop from "../src/components/BannerTop";
import TextField from "../src/components/reusables/TextField";
import BannerBottom from "../src/components/BannerBottom";
import Button from "../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";

import Link from "next/link";

const Confirmation: NextPage = () => {
  return (
    <main className="h-screen flex flex-col justify-between ">
      <BannerTop />
      <section className="flex flex-col items-center justify-center px-5 lg:w-[30vw] md:w-[40vw] sm:w-[50vw] mx-auto ">
        <img
          className="animate-bounce"
          src="/static/images/confirm.svg"
          alt=""
        />
        <h1 className="font-bold text-primary text-xl text-center my-2">
          A scrim mail has been sent to your mail
        </h1>
        <p className="text-center my-2 text-gray-dark">
          Kindly go through your mail inbox (Usermail@mail.com) for your
          verification mail
        </p>
        <Link href={"/authenticated"}>
          <Button
            icon={<CgArrowLongRight />}
            className="my-1 w-24 rounded-3xl"
            variant="contained-primary"
          />
        </Link>
      </section>
      <BannerBottom></BannerBottom>
    </main>
  );
};

export default Confirmation;
