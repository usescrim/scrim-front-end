import React from "react";
import { NextPage } from "next";

import { AiOutlineArrowLeft } from "react-icons/ai";

import Button from "../../../../src/components/reusables/Button";
import DashboardLayout from "../../../../src/components/DashboardLayout";

import SingleSend from "../../../../src/Icons/SingleSend";
import BulkSend from "../../../../src/Icons/BulkSend";
import { useRouter } from "next/router";
import Arrow from "../../../../src/Icons/Arrow";
import ScrimButton from "../../../../src/components/reusables/ScrimButton";

const Send: NextPage = () => {
  const router = useRouter();
  return (
    <DashboardLayout>
      <section className="space-y-5">
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => router.back()}
            className="rounded-[0px] bg-white"
            icon={<AiOutlineArrowLeft color="black" />}
          />
          <h1 className="text-lg">Send Money</h1>
        </div>
        <div className="w-full bg-white rounded-[20px] flex flex-row p-5 md:px-10 items-center space-x-5">
          <SingleSend />
          <div className="flex flex-col w-fit space-y-2">
            <h1 className="font-bold text-xl">Single send</h1>
            <h1 className=" text-slate-400">
              Scrim at one particular special person
            </h1>
          </div>
          <span className="grow"></span>
          <ScrimButton />
        </div>
        <div className="w-full bg-white rounded-[20px] flex flex-row p-5 md:px-10 items-center space-x-5">
          <BulkSend />
          <div className="flex flex-col w-fit space-y-2">
            <h1 className="font-bold text-xl">Bulk Send</h1>
            <h1 className=" text-slate-400">Send scrims to your geng !</h1>
          </div>
          <span className="grow"></span>
          <ScrimButton onClick={() => router.push("send/bulk")} />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Send;
