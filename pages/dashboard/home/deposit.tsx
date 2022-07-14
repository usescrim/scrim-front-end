import React from "react";
import { NextPage } from "next";
import Button from "../../../src/components/reusables/Button";

import { AiOutlineArrowLeft } from "react-icons/ai";
import DashboardLayout from "../../../src/components/DashboardLayout";
import CustomInput from "../../../src/components/reusables/CustomInput";
import OrchestateHq from "../../../src/Icons/OrchestateHq";
import { useRouter } from "next/router";
import Arrow from "../../../src/Icons/Arrow";

const Deposit: NextPage = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
      <section>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => router.back()}
            className="rounded-[0px] bg-white"
            icon={<AiOutlineArrowLeft color="black" />}
          />
          <h1 className="text-lg">Deposit</h1>
        </div>
        <div className="bg-white rounded-[30px] p-4 md:py-[52px] md:px-[60px] my-[20px] space-y-10">
          <div>
            <h1 className="text-base text-slate-500 my-5 ml-3">Amount</h1>
            <CustomInput type="number" placeholder="amount" />
            <h1 className="text-base text-slate-500 my-5 ml-3 flex items-center space-x-3">
              <img src="/static/images/tokenLogo.svg" alt="scrim token logo" />
              <span>200 Scrim Tokens</span>
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-bold mt-5 ml-3">Credit Option</h1>
            <div className="w-full bg-white  flex flex-row  py-8 items-center space-x-5 ">
              <OrchestateHq />
              <div className="flex flex-col w-fit space-y-2">
                <h1 className="font-bold text-xl">Use orchestateHq</h1>
                <h1 className=" text-slate-400">
                  Make transfer directly into your scrim wallet
                </h1>
              </div>
              <span className="grow"></span>
              <Button icon={<Arrow color="white" />} className="w-28" />
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Deposit;
