import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="my-5 flex space-x-2">
        <Link href="/login">
          <a>Sign In</a>
        </Link>
        <Link href="/register">
          <a>Create an account</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
