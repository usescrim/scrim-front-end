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
    { title: "Home", link: "/dashboard/home", icon: Home },
    {
      title: "Transfers",
      link: "/dashboard/transfers",
      icon: Transfer,
    },
    { title: "Accounts", link: "/dashboard/accounts", icon: Account },
    { title: "Profile", link: "/dashboard/profile", icon: Profile },
  ];
  return (
    <aside className="fixed md:static bottom-0 left-0 h-fit md:h-[90vh] w-full md:w-[18vw] bg-white border-t border-gray-light sm:border-t-0">
      <ul className="md:py-20 flex flex-row justify-between h-fit md:flex-col md:h-[90vh] w-full">
        {items.map((item, index) => {
          let Icon = item.icon;
          return (
            <Link key={item.title} href={item.link} className="h-fit w-1/4">
              <a className="h-fit w-full">
                <li
                  title={item.title}
                  className={`p-5 py-8 md:px-5 md:py-4 w-full lg:pl-14 lg:w-full md:pl-8 md:w-full sm:px-8 sm:w-fit cursor-pointer flex items-center justify-center md:justify-start hover:bg-slate-100 space-x-3 ${
                    router.pathname.startsWith(item.link)
                      ? "bg-slate-100 border-t-8 md:border-r-8 md:border-t-0 border-primary text-primary"
                      : "hover:border-b-8 hover:border-slate-100 md:hover:border-b-0 md:hover:border-r-8 md:hover:border-slate-100"
                  } `}
                >
                  <span
                    className={`md:block ${
                      !router.pathname.startsWith(item.link)
                        ? "hidden"
                        : "block"
                    }`}
                  >
                    <Icon
                      color={
                        router.pathname.startsWith(item.link)
                          ? "#7000FF"
                          : "#4F5255"
                      }
                    />
                  </span>

                  {!router.pathname.startsWith(item.link) ? (
                    <span className="md:hidden text-sm">{item.title}</span>
                  ) : null}
                  <span className="lg:block md:block sm:hidden hidden">
                    {item.title}
                  </span>
                </li>
              </a>
            </Link>
          );
        })}
        <li className="grow hidden md:flex"></li>
        <li
          title={"Logout"}
          className={`hidden px-5 py-4 w-fit lg:pl-14 lg:py-4 lg:w-full md:pl-8 md:w-full sm:px-8 sm:w-fit justify-self-end cursor-pointer md:flex items-center hover:bg-slate-100 space-x-3 text-error hover:border-r-8 hover:border-slate-100 `}
        >
          <Logout />{" "}
          <span className="lg:block md:block sm:hidden hidden">Logout</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
