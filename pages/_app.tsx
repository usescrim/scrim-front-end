import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";

const exceptions: Array<String> = [
  "/login",
  "/register",
  "/confirmation",
  "/authenticated",
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/fonts/Moderat-Bold.ttf" />
      </Head>
      {exceptions.includes(router.pathname) ? null : <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
