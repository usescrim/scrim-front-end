import React from "react";

import TransactionIcon from "../../../Icons/TransactionIcon";

type TransactionType = {
  reciever: string;
  amount: number;
  platform: string;
  date: string;
};

type PropsType = {
  transaction: TransactionType;
};

const Transaction = ({ transaction }: PropsType) => {
  const { reciever, amount, platform, date } = transaction;
  return (
    <div className="w-full bg-white rounded-[20px] flex flex-row p-5 md:px-10 items-center space-x-5">
      <TransactionIcon />{" "}
      <div className="flex flex-col w-fit space-y-2">
        <h1 className="font-semibold text-lg">{reciever}</h1>
        <h1 className="capitalize flex items-center space-x-2">
          <img
            className="w-[20px]"
            src={`/static/images/${platform.toLowerCase()}.svg`}
            alt=""
          />
          <span>{platform}</span>
        </h1>
      </div>
      <span className="grow"></span>
      <div className="flex flex-col w-fit items-end space-y-2">
        <h1 className="font-semibold text-lg flex items-center space-x-2">
          <img
            className="w-[20px]"
            src={`/static/images/tokenLogo.svg`}
            alt=""
          />
          <span>{amount}</span>
        </h1>
        <h1 className="capitalize">{date}</h1>
      </div>
    </div>
  );
};

export default Transaction;
