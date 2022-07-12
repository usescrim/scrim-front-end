import React from "react";
import Transaction from "../../reusables/Transaction";

const transactions = [
  {
    reciever: "@usmangurowa",
    date: "24 Jul",
    platform: "twitter",
    amount: 250,
  },
  {
    reciever: "@pleasantOx",
    date: "24 Jul",
    platform: "twitter",
    amount: 350,
  },
  {
    reciever: "@roku",
    date: "24 Jul",
    platform: "instagram",
    amount: 350,
  },
];

const TransactionsHistory = () => {
  return (
    <section className="my-5 space-y-4">
      {transactions.map((transaction, index) => {
        return <Transaction key={index} transaction={transaction} />;
      })}
    </section>
  );
};

export default TransactionsHistory;
