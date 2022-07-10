import React from "react";
import Sidebar from "../Sidebar";

type LayoutTypes = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: LayoutTypes) => {
  return (
    <main className="flex flex-col-reverse md:flex-row w-screen">
      <Sidebar />
      <section className="p-3 md:p-8 w-full md:w-[82vw] mb-10 md:mb-0">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
