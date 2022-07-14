import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";

import classNames from "classnames";

import { FiChevronDown } from "react-icons/fi";

type DropDownType = {
  label?: string;
  children?: React.ReactNode;
  active?: React.ReactNode;
};

const Dropdown = ({ label, children, active }: DropDownType) => {
  return (
    <div className="relative  flex flex-col">
      {label && (
        <span className="self-start text-gray my-2 mx-0 text-md md:ml-3">
          {label}
        </span>
      )}
      <Menu as="div" className={`relative inline-block text-left `}>
        <div>
          <Menu.Button
            className={`inline-flex items-center justify-between border-gray-300 py-2 bg-white text-md hover:bg-gray-50 focus:outline-non border-2 border-primary font-semibold focus-within:outline-none p-2 px-5 h-14 rounded-3xl text-primary placeholder-opacity-50 w-64`}
          >
            {active}
            <FiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right w-full absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 w-full">
              {/* <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item> */}
              {children}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
