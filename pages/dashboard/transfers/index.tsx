import React from "react";
import { NextPage } from "next";
import DashboardLayout from "../../../src/components/DashboardLayout";
import Transfer from "../../../src/Icons/Transfer";

const Transfers: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-primary text-2xl font-semibold font-moderat flex items-center space-x-2">
          <Transfer color="rgb(112 0 255)" /> <span>Transfers</span>
        </h1>
        <div className="bg-white rounded-[30px] px-6 py-4">
          <span>Filter</span>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transfers;
