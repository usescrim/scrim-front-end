import React from "react";
import { NextPage } from "next";

import { CgArrowLongRight } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";

import Button from "../../../../src/components/reusables/Button";
import DashboardLayout from "../../../../src/components/DashboardLayout";

import BulkSend from "../../../../src/Icons/BulkSend";
import { useRouter } from "next/router";
import TextField from "../../../../src/components/reusables/TextField";
import Modal from "../../../../src/components/reusables/Modal";
import Arrow from "../../../../src/Icons/Arrow";
import ScrimButton from "../../../../src/components/reusables/ScrimButton";

type PersonType = {
  id: number;
  username: string;
  amount: number;
};

const platforms: Array<string> = [
  "instagram",
  "twitter",
  "tiktok",
  "clubhouse",
];

const Bulk: NextPage = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [platform, setPlatform] = React.useState<string>("instagram");
  const [persons, setPersons] = React.useState<Array<PersonType>>([
    { id: 1, username: "", amount: 0 },
    { id: 2, username: "", amount: 0 },
    { id: 3, username: "", amount: 0 },
    { id: 4, username: "", amount: 0 },
  ]);
  const router = useRouter();
  return (
    <DashboardLayout>
      <section className="space-y-5 mb-20">
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => router.back()}
            className="rounded-[0px] bg-white"
            icon={<AiOutlineArrowLeft color="black" />}
          />
          <h1 className="text-lg">Send Money</h1>
        </div>
        <div className="w-ful rounded-[20px] flex flex-row p-5 md:px-10 items-center space-x-5">
          <BulkSend />
          <div className="flex flex-col w-fit space-y-2">
            <h1 className="font-bold text-xl">Bulk Send</h1>
            <h1 className=" text-slate-400">Send scrims to your geng !</h1>
          </div>
        </div>
        <div className="bg-white rounded-[30px] p-4 md:py-[52px] md:px-[60px] my-[20px] space-y-10">
          <div className="bg-slate-100 flex items-center space-x-3 p-5 rounded-[15px] capitalize">
            <img
              className="w-10"
              src={`/static/images/${platform}.svg`}
              alt=""
            />
            <h1 className="text-slate-500">{platform}</h1>
            <span className="grow"></span>
            <h1
              onClick={() => setModal(true)}
              className="text-primary underline cursor-pointer"
            >
              Change
            </h1>
          </div>
          {persons.map((person: PersonType, index: number) => {
            return (
              <>
                <Person person={person} index={index} />
                <div className="border-b border-slate-300" />
              </>
            );
          })}
          <div className="flex items-center justify-between w-full p-0 md:pl-16 md:pr-14 ">
            <h1 className=" text-primary flex flex-row items-center md:self-center space-x-2 text-lg md:text-xl w-fit">
              <span>
                <MdAddCircle size={50} />
              </span>
              <span>Add more</span>
            </h1>
            <ScrimButton />
          </div>
        </div>
      </section>
      <Modal open={modal} className="flex items-center justify-center">
        <div className="bg-white rounded-[15px] p-5 md:w-1/2 w-[90%]">
          <div className="border-b border-slate-500 p-2 flex justify-between">
            <span>Choose Platform</span>
            <span
              onClick={() => setModal(false)}
              className="text-slate-300 cursor-pointer"
            >
              <AiFillCloseCircle size={30} />
            </span>
          </div>
          <div className="w-full space-y-2 py-3">
            {platforms.map((_platform) => {
              return (
                <div
                  onClick={() => {
                    setPlatform(_platform);
                    setModal(false);
                  }}
                  className={`flex items-center p-5 space-x-3 text-2xl text-slate-700 ${
                    _platform === platform && "bg-slate-100"
                  }  hover:bg-slate-100 cursor-pointer capitalize rounded-[30px]`}
                >
                  <img
                    className="w-8"
                    src={`/static/images/${_platform}.svg`}
                    alt=""
                  />{" "}
                  <span>{_platform}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Bulk;

const Person = (props: any) => {
  const { id, username, amount } = props.person;

  return (
    <div className="space-y-2 md:ml-16">
      <h1 className="text-primary flex flex-row items-center md:self-center space-x-5 text-xl w-full px-4">
        <span>
          <BsPersonCircle size={20} />
        </span>
        <span>Person {props.index + 1}</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between px-3">
        <div className="w-full">
          <TextField
            label="Username"
            fullWidth
            className="w-[100%] md:w-[90%]"
            placeholder="@username"
          />
        </div>
        <div className="w-full flex justify-center">
          <TextField
            label="Amount"
            className="w-[100%] md:w-[90%]"
            fullWidth
            placeholder="amount"
          />
        </div>
      </div>
    </div>
  );
};
