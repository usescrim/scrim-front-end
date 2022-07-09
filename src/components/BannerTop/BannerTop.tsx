import React from "react";

const BannerTop = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-[#09CAEE] min-h-[20vh] flex items-center justify-center space-x-2">
      <img src="/static/images/logo.svg" alt="" />
      <h1 className="text-white text-5xl lg:text-6xl ">scrim</h1>
    </section>
  );
};

export default BannerTop;
