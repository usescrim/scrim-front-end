import React from "react";
import Confirm from "../../../../Icons/Confirm";
import Button from "../../../reusables/Button";
import ScrimButton from "../../../reusables/ScrimButton";

import SingleSendIcon from "../../../../Icons/SingleSend";
import Dropdown from "../../../reusables/Dropdown";
import { Menu } from "@headlessui/react";
import TextField from "../../../reusables/TextField";
import TextArea from "../../../reusables/TextArea";

type ModalType = {
  onScrim?: React.MouseEventHandler<HTMLButtonElement>;
};

const platforms: any = [
  { id: 1, title: "instagram" },
  { id: 2, title: "twitter" },
  { id: 3, title: "tiktok" },
  { id: 4, title: "clubhouse" },
];

const SingleSend = ({ onScrim }: ModalType) => {
  const [platform, setPlatform] = React.useState<string>("instagram");
  return (
    <div className="bg-white w-11/12 md:w-2/5 p-5 md:p-10 flex flex-col justify-center items-center rounded-[70px]">
      <h1 className="font-bold text-xl text-secondary my-5 flex items-center space-x-4">
        <SingleSendIcon /> <span>Single send</span>
      </h1>
      <p className="text-center w-full md:w-10/12">
        Scrim at one particular special person
      </p>
      <div className="my-10 space-y-5">
        <Dropdown
          label="Platform"
          active={
            <div className="flex items-center space-x-2 cursor-pointer capitalize">
              <img
                className="w-5"
                src={`/static/images/${platform}.svg`}
                alt=""
              />{" "}
              <span>{platform}</span>
            </div>
          }
        >
          <div className="p-2 w-full">
            {platforms.map((pltfrm: any) => {
              return (
                <Menu.Item key={pltfrm.id}>
                  {({ active = true }) => (
                    <div
                      onClick={() => setPlatform(pltfrm.title)}
                      className={`capitalize p-4 rounded-full ${
                        pltfrm.title === platform && "bg-slate-200"
                      } hover:bg-slate-200 block my-1 cursor-pointer`}
                    >
                      <div className="flex items-center space-x-5">
                        <img
                          className="w-5"
                          src={`/static/images/${pltfrm.title}.svg`}
                          alt=""
                        />{" "}
                        <span>{pltfrm.title}</span>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Dropdown>
        <TextField label="Username" placeholder="@username" />
        <TextField label="Amount" type="number" placeholder="amount" />
        <TextArea rows={40} />
      </div>
      <div className="w-full flex items-center justify-around mt-10">
        <Button
          onClick={onScrim}
          variant="standard-error"
          className="text-2xl font-extrabold w-28"
        >
          Back
        </Button>
        <ScrimButton onClick={onScrim} />
      </div>
    </div>
  );
};

export default SingleSend;
