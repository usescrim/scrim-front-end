import React from "react";
import Button from "../../reusables/Button";
import { CgArrowLongRight } from "react-icons/cg";

const QuickActions = () => {
  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-2 my-5">
      <div className="bg-gradient-to-tl from-[#09CAEE] to-primary flex flex-col justify-between h-72 w-full rounded-[30px] overflow-hidden p-5">
        <h1 className="text-white font-light text-5xl w-4/5">
          Tip your favorite creator today
        </h1>
        <Button
          variant="contained-primary"
          className="bg-white text-primary w-[90px] rounded-[30px] self-end"
          icon={<CgArrowLongRight />}
        />
      </div>
      <div className="bg-gradient-to-tl from-primary via-[#2FBF71] to-[#FCDC4D] flex flex-col justify-between h-72 w-full rounded-[30px] overflow-hidden p-5">
        <h1 className="text-white font-light text-5xl w-4/5">
          Make a friend smile today
        </h1>
        <Button
          variant="contained-primary"
          className="bg-white text-primary w-[90px] rounded-[30px] self-end"
          icon={<CgArrowLongRight />}
        />
      </div>
      <div className="bg-gradient-to-tr from-[#EF2D56] via-primary to-[#68B684] flex flex-col justify-between h-72 w-full rounded-[30px] overflow-hidden p-5">
        <h1 className="text-white font-light text-5xl w-4/5">
          Surprise your favorite sibling
        </h1>
        <Button
          variant="contained-primary"
          className="bg-white text-primary w-[90px] rounded-[30px] self-end"
          icon={<CgArrowLongRight />}
        />
      </div>
    </section>
  );
};

export default QuickActions;
