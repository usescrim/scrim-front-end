import React from "react";
import Button from "../../reusables/Button";
import { CgArrowLongRight } from "react-icons/cg";
import Arrow from "../../../Icons/Arrow";
import ScrimButton from "../../reusables/ScrimButton";

const QuickActions = () => {
  return (
    <section className="overflow-x-auto">
      <section className="flex flex-row flex-nowrap space-x-5 w-fit overflow-x-auto my-5">
        <div className="bg-gradient-to-tl from-[#09CAEE] to-primary flex flex-col justify-between h-72 w-[85vw] md:w-1/3 rounded-[30px]  md:overflow-hidden p-8">
          <div className="w-full flex items-end justify-around md:justify-start">
            <h1 className="text-white font-light text-4xl w-2/3 md:w-2/4">
              Tip your favorite creator today
            </h1>
            <img className="w-20 mb-2" src="/static/images/heart.png" alt="" />
          </div>
          <ScrimButton variant="white" className="self-end w-2/4" />
        </div>
        <div className="bg-gradient-to-tl from-primary via-[#2FBF71] to-[#FCDC4D] flex flex-col justify-between h-72 w-[85vw] md:w-1/3 rounded-[30px] md:overflow-hidden p-8">
          <div className="w-full flex items-end justify-around md:justify-start">
            <h1 className="text-white font-light text-4xl w-2/4">
              Make a friend smile today
            </h1>
            <img className="w-20 mb-2" src="/static/images/hand.png" alt="" />
          </div>
          <ScrimButton variant="white" className="self-end w-2/4" />
        </div>
        <div className="bg-gradient-to-tr from-[#EF2D56] via-primary to-[#68B684] flex flex-col justify-between h-72 w-[85vw] md:w-1/3 rounded-[30px] md:overflow-hidden p-8">
          <div className="w-full flex items-end justify-around md:justify-start">
            <h1 className="text-white font-light text-4xl w-2/4">
              Surprise your favorite sibling
            </h1>
            <img className="w-20 mb-2" src="/static/images/halo.png" alt="" />
          </div>

          <ScrimButton variant="white" className="self-end w-2/4" />
        </div>
      </section>
    </section>
  );
};

export default QuickActions;
