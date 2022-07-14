import React from "react";
import Confirm from "../../../../Icons/Confirm";
import Button from "../../../reusables/Button";
import ScrimButton from "../../../reusables/ScrimButton";

type ModalType = {
  onScrim?: React.MouseEventHandler<HTMLButtonElement>;
};

const Confirmation = ({ onScrim }: ModalType) => {
  return (
    <div className="bg-white w-11/12 md:w-2/5 p-10 px-10 flex flex-col justify-center items-center rounded-[70px]">
      <Confirm />
      <h1 className="font-bold text-xl text-secondary my-5">
        Kindly Confirm Action
      </h1>
      <p className="text-center w-full md:w-10/12">
        Kindly Confirm that you want to send 2500 scrim tokens to @figollly,
        @nefe, @Mozihla, @pleasant, and @ronaldo
      </p>
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

export default Confirmation;
