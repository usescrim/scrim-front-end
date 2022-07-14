import React from "react";
import { NextPage } from "next";
import BannerTop from "../src/components/BannerTop";
import TextField from "../src/components/reusables/TextField";
import BannerBottom from "../src/components/BannerBottom";

import Link from "next/link";
import ScrimButton from "../src/components/reusables/ScrimButton";

const Register: NextPage = () => {
  return (
    <main className="h-screen overflow-auto flex flex-col justify-between ">
      <BannerTop />
      <section className="flex flex-col items-center justify-center px-5 my-5 md:my-0 lg:w-[80vw] md:w-[90vw] sm:w-[100vw] mx-auto ">
        <h1 className="font-semibold text-primary text-xl text-center my-2">
          Create an account
        </h1>
        <p className="text-center my-2 text-gray-dark">
          Create a scrim account withing seconds and spread love
        </p>
        <div className="grid gap-3 grid-cols-1 grid-rows-3 md:grid-cols-2 w-full md:w-[60vw]">
          <div className="w-full">
            <TextField
              label="Email"
              fullWidth
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="w-full">
            <TextField
              label="Username"
              type="text"
              fullWidth
              placeholder="Username"
            />
          </div>

          <div className="w-full">
            <TextField
              label="Password"
              type="password"
              fullWidth
              placeholder="Password"
            />
          </div>
          <div className="w-full">
            <TextField
              label="Retype Password"
              type="password"
              fullWidth
              placeholder="Retype Password"
            />
          </div>
          <div className="w-full">
            <TextField label="Country" fullWidth placeholder="Country" />
          </div>
          <div className="h-fit w-full flex justify-center md:justify-end self-end">
            <ScrimButton />
          </div>
        </div>
      </section>
      <BannerBottom>
        <p className="text-gray-dark">Already have an account?</p>
        <Link href={"/login"}>
          <a className="text-primary font-semibold">Sign In</a>
        </Link>
      </BannerBottom>
    </main>
  );
};

export default Register;
