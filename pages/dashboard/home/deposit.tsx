import React from "react";
import { NextPage } from "next";
import Button from "../../../src/components/reusables/Button";

import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import DashboardLayout from "../../../src/components/DashboardLayout";
import CustomInput from "../../../src/components/reusables/CustomInput";
import TrendsDown from "../../../src/Icons/TrendsDown";
import Cards from "../../../src/Icons/Cards";
import Fintechs from "../../../src/Icons/Fintechs";
import OrchestateHq from "../../../src/Icons/OrchestateHq";
import { useRouter } from "next/router";

const Deposit: NextPage = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
      <section>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => router.back()}
            className="rounded-none bg-white"
            icon={<AiOutlineArrowLeft color="black" />}
          />
          <h1 className="text-lg">Deposit</h1>
        </div>
        <div className="bg-white rounded-[30px] p-4 md:py-[52px] md:px-[60px] my-[20px] space-y-10">
          <div>
            <h1 className="text-base text-slate-500 my-5 ml-3">Amount</h1>
            <CustomInput placeholder="amount" />
            <h1 className="text-base text-slate-500 my-5 ml-3 flex items-center space-x-3">
              <img src="/static/images/tokenLogo.svg" alt="scrim token logo" />
              <span>200 Scrim Tokens</span>
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-bold mt-5 ml-3">Credit Option</h1>
            <div className="w-full bg-white  flex flex-row  py-8 items-center space-x-5 border-b border-slate-300">
              <TrendsDown />
              <div className="flex flex-col w-fit space-y-2">
                <h1 className="font-bold text-xl">1234567890</h1>
                <h1 className=" text-slate-400">
                  Make transfer directly into your scrim wallet
                </h1>
              </div>
              <span className="grow"></span>
              <Button icon={<CgArrowLongRight />} className="w-28" />
            </div>
            <div className="w-full bg-white  flex flex-row  py-8 items-center space-x-5 border-b border-slate-300">
              <Cards />
              <div className="flex flex-col w-fit space-y-2">
                <h1 className="font-bold text-xl">Cards</h1>
                <h1 className=" text-slate-400">
                  Deposit your scrim wallet using cards
                </h1>
              </div>
              <span className="grow"></span>
              <Button icon={<CgArrowLongRight />} className="w-28" />
            </div>
            <div className="w-full bg-white  flex flex-row  py-8 items-center space-x-5 border-b border-slate-300">
              <Fintechs />
              <div className="flex flex-col w-fit space-y-2">
                <h1 className="font-bold text-xl">Other Fintech apps</h1>
                <h1 className=" text-slate-400">
                  Credit your scrim wallet using your other fintech products
                </h1>
              </div>
              <span className="grow"></span>
              <Button icon={<CgArrowLongRight />} className="w-28" />
            </div>
            <div className="w-full bg-white  flex flex-row  py-8 items-center space-x-5 ">
              <OrchestateHq />
              <div className="flex flex-col w-fit space-y-2">
                <h1 className="font-bold text-xl">Use orchestateHq</h1>
                <h1 className=" text-slate-400">
                  Make transfer directly into your scrim wallet
                </h1>
              </div>
              <span className="grow"></span>
              <Button icon={<CgArrowLongRight />} className="w-28" />
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Deposit;
