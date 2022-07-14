import React from "react";
import Button from "../../reusables/Button";
import { CgArrowLongRight } from "react-icons/cg";
import Arrow from "../../../Icons/Arrow";

const QuickActions = () => {
  return (
    <section className="overflow-x-auto">
      <section className="flex flex-row flex-nowrap space-x-5 w-fit overflow-x-auto my-5">
        <div className="bg-gradient-to-tl from-[#09CAEE] to-primary flex flex-col justify-between h-72 w-[85vw] md:w-1/3 rounded-[30px]  md:overflow-hidden p-10">
          <h1 className="text-white font-light text-5xl w-4/5">
            Tip your favorite creator today
          </h1>
          <Button
            variant="contained-primary"
            className="bg-white text-primary w-[90px] rounded-[30px] self-end"
            icon={<Arrow />}
          />
        </div>
        <div className="bg-gradient-to-tl from-primary via-[#2FBF71] to-[#FCDC4D] flex flex-col justify-between h-72 w-[85vw] md:w-1/3 rounded-[30px] md:overflow-hidden p-10">
          <h1 className="text-white font-light text-5xl w-4/5">
            Make a friend smile today
          </h1>
          <Button
            variant="contained-primary"
            className="bg-white text-primary w-[90px] rounded-[30px] self-end"
            icon={<Arrow />}
          />
        </div>
        <div className="bg-gradient-to-tr from-[#EF2D56] via-primary to-[#68B684] flex flex-col justify-between h-72 w-[85vw] md:w-1/3 rounded-[30px] md:overflow-hidden p-10">
          <h1 className="text-white font-light text-5xl w-4/5">
            Surprise your favorite sibling
          </h1>
          <Button
            variant="contained-primary"
            className="bg-white text-primary w-[90px] rounded-[30px] self-end"
            icon={<Arrow />}
          />
        </div>
      </section>
    </section>
  );
};

export default QuickActions;
