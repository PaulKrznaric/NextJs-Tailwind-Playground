import React from "react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
