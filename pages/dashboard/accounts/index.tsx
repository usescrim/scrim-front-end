import React from "react";
import { NextPage } from "next";
import DashboardLayout from "../../../src/components/DashboardLayout";
import Account from "../../../src/Icons/Account";

const Accounts: NextPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-primary text-2xl font-semibold font-moderat flex items-center space-x-2">
        <Account color="rgb(112 0 255)" /> <span>Accounts</span>
      </h1>
    </DashboardLayout>
  );
};

export default Accounts;
