import React from "react";
import { NextPage } from "next";
import DashboardLayout from "../../../src/components/DashboardLayout";
import Profile from "../../../src/Icons/Profile";

const ProfileIndex: NextPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-primary text-2xl font-semibold font-moderat flex items-center space-x-2">
        <Profile color="rgb(112 0 255)" /> <span>Profile</span>
      </h1>
    </DashboardLayout>
  );
};

export default ProfileIndex;
