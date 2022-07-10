import React from "react";
import { NextPage } from "next";
import DashboardLayout from "../../../src/components/DashboardLayout";
import Button from "../../../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-primary text-2xl font-semibold font-moderat">
        Hey Nagamoto
      </h1>
      <p className="text-slate-500 my-3">
        who would you try to scrim at today {"🤲🏿"}
      </p>
      <div className="flex flex-row my-10 items-center justify-between w-full">
        <div className="bg-primary flex flex-col items-center justify-around h-72 w-1/2 rounded-[3rem] p-5">
          <Button variant="contained-warning" className="text-primary">
            Balance
          </Button>
          <div className="flex flex-row items-center justify-center space-x-2">
            <img src="/static/images/tokenLogo.svg" alt="" />
            <h1 className="text-white text-xl">Scrim Tokens</h1>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2">
            <h1 className="text-white text-7xl">3,180</h1>
          </div>
          <Button variant="contained-secondary" className="w-2/5 rounded-full">
            = N60,000/$100
          </Button>
        </div>
        <div className="flex flex-col items-center justify-between h-64 w-1/2 rounded-[3rem] p-5">
          <div className="bg-white flex flex-row items-center justify-between h-2/5 w-full p-5 rounded-3xl">
            <h1 className="text-secondary font-semibold">Deposit</h1>
            <Button
              icon={<CgArrowLongRight />}
              className="w-24 rounded-[4rem]"
            />
          </div>
          <div className="bg-white flex flex-row items-center justify-between h-2/5 w-full p-5 rounded-3xl">
            <h1 className="text-secondary font-semibold">Send Money</h1>
            <Button
              icon={<CgArrowLongRight />}
              className="w-24 rounded-[4rem]"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
