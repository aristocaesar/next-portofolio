import Head from "next/head";
import { Fragment } from "react";
import Navbar from "@Components/navbar/nav";
import ImageProfile from "@Components/ImageProfile";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Aristo Caesar Pratama</title>
      </Head>
      <div className="container my-6 m-auto md:w-6/12 w-full">
        <h1 className="text-center font-bold text-white">Aristoc.Space</h1>
        <Navbar />
        <ImageProfile />
      </div>
    </Fragment>
  );
}
