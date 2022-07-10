import React from "react";
import Sidebar from "../Sidebar";

type LayoutTypes = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: LayoutTypes) => {
  return (
    <main className="flex ">
      <Sidebar />
      <section className="p-5">{children}</section>
    </main>
  );
};

export default DashboardLayout;
