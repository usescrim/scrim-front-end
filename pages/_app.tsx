import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";

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
      {exceptions.includes(router.pathname) ? null : <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
