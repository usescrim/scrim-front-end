import React from "react";
import { NextPage } from "next";
import BannerTop from "../src/components/BannerTop";
import TextField from "../src/components/reusables/TextField";

const Login: NextPage = () => {
  return (
    <main className="container">
      <BannerTop />
      <section className="border w-3/6 mx-auto flex flex-col items-center justify-center">
        <h1 className="font-semibold text-primary text-xl text-center">
          Sign In
        </h1>
        <p>
          Sign into your account and make some special people happy with your
          scrims
        </p>
        <label htmlFor="email">Email</label>
        <TextField placeholder="Email address" />
      </section>
    </main>
  );
};

export default Login;
