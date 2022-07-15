import React from "react";
import { NextPage } from "next";
import BannerTop from "../src/components/BannerTop";
import TextField from "../src/components/reusables/TextField";
import BannerBottom from "../src/components/BannerBottom";
import Button from "../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";

import Link from "next/link";
import ScrimButton from "../src/components/reusables/ScrimButton";

const Login: NextPage = () => {
  return (
    <main className="h-screen flex flex-col justify-between ">
      <BannerTop />
      <section className="flex flex-col items-center justify-center px-5 lg:w-[30vw] md:w-[40vw] sm:w-[50vw] mx-auto ">
        <h1 className="font-semibold text-primary text-xl text-center my-2">
          Sign In
        </h1>
        <p className="text-center my-2 text-gray-dark">
          Sign into your account and make some special people happy with your
          scrims
        </p>
        <div className="my-2 w-full">
          <TextField label="Email" fullWidth placeholder="Email address" />
        </div>
        <div className="my-2 w-full">
          <TextField
            label=" Password"
            type="password"
            fullWidth
            placeholder="Password"
          />
        </div>
        <ScrimButton className="my-1 self-end " />
      </section>
      <BannerBottom>
        <p className="text-gray-dark">Don&apos;t have an account?</p>
        <Link href={"/register"}>
          <a className="text-primary font-semibold">Create an account</a>
        </Link>
      </BannerBottom>
    </main>
  );
};

export default Login;
