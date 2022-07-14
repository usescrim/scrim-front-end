import Link from "next/link";
import React from "react";
import Button from "../reusables/Button";
import Icon from "../reusables/Icon";

import { BsMoonFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";

type NavbarType = {};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState<"dark" | "light">("light");
  return (
    <>
      <nav className="bg-white border-b border-gray-light px-2 md:px-10 sm:px-4 ">
        <div className="max-w-7xl mx-auto px-2">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center  sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <a className="flex flex-row items-center space-x-2">
                    <img
                      src="/static/images/logoPrimary.svg"
                      alt="scrim logo"
                    />
                    <h1 className="font-semibold text-secondary text-2xl -mt-1">
                      scrim
                    </h1>
                  </a>
                </Link>
              </div>
            </div>
            <div className="absolute  inset-y-0 right-0 flex flex-row space-x-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="mode">
                {mode === "dark" ? (
                  <Button
                    className="rounded-2xl"
                    onClick={() => setMode("light")}
                    variant="contained-primary"
                    icon={<CgSun />}
                  />
                ) : (
                  <Button
                    className="rounded-2xl"
                    onClick={() => setMode("dark")}
                    variant="outlined-primary"
                    icon={<BsMoonFill />}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
