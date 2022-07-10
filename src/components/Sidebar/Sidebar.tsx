import { useRouter } from "next/router";
import React from "react";

import Home from "../../Icons/Home";
import Transfer from "../../Icons/Transfer";
import Account from "../../Icons/Account";
import Profile from "../../Icons/Profile";
import Logout from "../../Icons/Logout";
import Link from "next/link";

type SidebarType = {};

const Sidebar = () => {
  const router = useRouter();
  const items = [
    { title: "Home", link: "/dashboard", icon: <Home color="#7000FF" /> },
    { title: "Transfers", link: "/dashboard/transfers", icon: <Transfer /> },
    { title: "Accounts", link: "/dashboard/accounts", icon: <Account /> },
    { title: "Profile", link: "/dashboard/profile", icon: <Profile /> },
  ];
  return (
    <aside className="min-h-[90vh] w-fit md:w-[18vw] bg-white">
      <ul className="py-20 flex flex-col h-[90vh]">
        {items.map((item, index) => {
          return (
            <Link href={item.link}>
              <a>
                <li
                  key={item.title}
                  title={item.title}
                  className={`px-5 py-4 w-fit lg:pl-14 lg:w-full md:pl-8 md:w-full sm:px-8 sm:w-fit cursor-pointer flex items-center hover:bg-slate-100 space-x-3 ${
                    router.pathname === item.link
                      ? "bg-slate-100 border-r-8 border-primary text-primary"
                      : "hover:border-r-8 hover:border-slate-100"
                  } `}
                >
                  {item.icon}

                  <span className="lg:block md:block sm:hidden hidden">
                    {item.title}
                  </span>
                </li>
              </a>
            </Link>
          );
        })}
        <li className="grow"></li>
        <li
          title={"Logout"}
          className={`px-5 py-4 w-fit lg:pl-14 lg:py-4 lg:w-full md:pl-8 md:w-full sm:px-8 sm:w-fit justify-self-end cursor-pointer flex items-center hover:bg-slate-100 space-x-3 text-error hover:border-r-8 hover:border-slate-100 `}
        >
          <Logout />{" "}
          <span className="lg:block md:block sm:hidden hidden">Logout</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
