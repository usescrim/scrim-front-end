import React from "react";
import { NextPage } from "next";
import BannerTop from "../src/components/BannerTop";
import TextField from "../src/components/reusables/TextField";
import BannerBottom from "../src/components/BannerBottom";
import Button from "../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";

import Link from "next/link";

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
        <div className="grid gap-3 grid-cols-1 grid-rows-3 md:grid-cols-2">
          <div className="my-2 w-full">
            <label htmlFor="email" className="self-start text-gray my-1">
              Email
            </label>
            <TextField fullWidth placeholder="Email address" />
          </div>
          <div className="my-2 w-full">
            <label htmlFor="password" className="self-start text-gray my-1">
              Country
            </label>
            <TextField fullWidth placeholder="Country" />
          </div>
          <div className="my-2 w-full">
            <label htmlFor="email" className="self-start text-gray my-1">
              Password
            </label>
            <TextField type="password" fullWidth placeholder="Email address" />
          </div>
          <div className="my-2 w-full">
            <label htmlFor="password" className="self-start text-gray my-1">
              Retype Password
            </label>
            <TextField type="password" fullWidth placeholder="Password" />
          </div>
          <div className="w-full"></div>
          <div className="h-fit w-full  flex justify-center md:justify-end">
            <Link href={"/confirmation"}>
              <Button
                icon={<CgArrowLongRight />}
                className="self-end w-24 rounded-3xl"
                variant="contained-primary"
              />
            </Link>
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
