import React from "react";
import { NextPage } from "next";
import Sidebar from "../../src/components/Sidebar";
import DashboardLayout from "../../src/components/DashboardLayout";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>
      <h1>Welcome user</h1>
    </DashboardLayout>
  );
};

export default Dashboard;
