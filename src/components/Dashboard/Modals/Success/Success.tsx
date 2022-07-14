import React from "react";
import SuccessIcon from "../../../../Icons/SuccessIcon";
import ScrimButton from "../../../reusables/ScrimButton";

type ModalType = {
  onScrim?: React.MouseEventHandler<HTMLButtonElement>;
};

const Success = ({ onScrim }: ModalType) => {
  return (
    <div className="bg-white w-11/12 md:w-2/5 p-10 px-10 flex flex-col justify-center items-center rounded-[30px]">
      <SuccessIcon />
      <h1 className="font-bold text-xl text-secondary my-5">
        Scrims successfully sent
      </h1>
      <h1 className="text-center w-full md:w-10/12 flex items-center justify-center space-x-4">
        <img src="/static/images/tokenLogo.svg" alt="" />
        <span>2500 Scrim Tokens</span>
      </h1>
      <div className="w-full flex items-center justify-center mt-10">
        <ScrimButton onClick={onScrim} />
      </div>
    </div>
  );
};

export default Success;
