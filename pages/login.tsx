import React from "react";
import { NextPage } from "next";
import BannerTop from "../src/components/BannerTop";
import TextField from "../src/components/reusables/TextField";
import BannerBottom from "../src/components/BannerBottom";
import Button from "../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";

import Link from "next/link";

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
          <label htmlFor="email" className="self-start text-gray my-1">
            Email
          </label>
          <TextField fullWidth placeholder="Email address" />
        </div>
        <div className="my-2 w-full">
          <label htmlFor="password" className="self-start text-gray my-1">
            Password
          </label>
          <TextField type="password" fullWidth placeholder="Password" />
        </div>
        {/* <Button className="my-1 self-end" color="primary" variant="contained">
          Login
        </Button> */}
        <Button
          icon={<CgArrowLongRight />}
          className="my-1 self-end w-24 rounded-3xl"
          variant="contained-primary"
        />
      </section>
      <BannerBottom>
        <p className="text-gray-dark">Don't have an account?</p>
        <Link href={"/register"}>
          <a className="text-primary font-semibold">Create an account</a>
        </Link>
      </BannerBottom>
    </main>
  );
};

export default Login;
