import React from "react";
import Sidebar from "../Sidebar";

type LayoutTypes = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: LayoutTypes) => {
  return (
    <main className="flex flex-col-reverse md:flex-row md:h-[90vh] w-screen md:overflow-hidden">
      <Sidebar />
      <section className="p-3 md:p-8 w-full md:w-[82vw] mb-10 md:mb-0 overflow-y-auto">
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
