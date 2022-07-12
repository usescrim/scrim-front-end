import React from "react";
import { NextPage } from "next";
import DashboardLayout from "../../../src/components/DashboardLayout";
import Button from "../../../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";
import QuickActions from "../../../src/components/Dashboard/QuickActions";
import TransactionsHistory from "../../../src/components/Dashboard/TransactionsHistory";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-primary text-2xl font-semibold font-moderat">
        Hey Nagamoto
      </h1>
      <p className="text-slate-500 my-3">
        who would you try to scrim at today {"🤲🏿"}
      </p>
      <div className="md:flex md:flex-row my-10 items-center justify-between w-full">
        <div className="overflow-hidden flex flex-col items-center justify-around h-72 w-full md:w-1/2 rounded-[30px] bg-primary">
          <div className="bg-[url('/static/images/balanceCardBg.svg')] bg-no-repeat bg-cover flex flex-col items-center justify-around w-full h-72 p-5 ">
            <Button
              variant="contained-warning"
              className="text-primary w-full md:w-2/5 rounded-[30px]"
            >
              Balance
            </Button>
            <div className="flex flex-row items-center justify-center space-x-2">
              <img src="/static/images/tokenLogo.svg" alt="scrim token logo" />
              <h1 className="text-white text-xl">Scrim Tokens</h1>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <h1 className="text-white text-7xl">3,180</h1>
            </div>
            <Button
              variant="contained-secondary"
              className="w-full md:w-2/5 rounded-[30px]"
            >
              = N60,000/$100
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between h-64 w-full md:w-1/2 rounded-[3rem] py-5 md:p-5">
          <div className="bg-white flex flex-row items-center justify-between h-2/5 w-full p-5 rounded-[20px]">
            <h1 className="text-secondary font-semibold">Deposit</h1>
            <Button
              icon={<CgArrowLongRight />}
              className="w-24 rounded-[30px]"
            />
          </div>
          <div className="bg-white flex flex-row items-center justify-between h-2/5 w-full p-5 rounded-[20px]">
            <h1 className="text-secondary font-semibold">Send Money</h1>
            <Button
              icon={<CgArrowLongRight />}
              className="w-24 rounded-[30px]"
            />
          </div>
        </div>
      </div>
      <h1 className="text-gray-dark text-xl">Quick Actions</h1>
      <QuickActions />
      <h1 className="text-gray-dark text-xl">Transactions History</h1>
      <TransactionsHistory />
    </DashboardLayout>
  );
};

export default Dashboard;
