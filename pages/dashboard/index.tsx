import React from "react";
import { NextPage } from "next";

const Index: NextPage = () => {
  return <>loading...</>;
};

export default Index;

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: `/dashboard/home`,
    },
  };
};
