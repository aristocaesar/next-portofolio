import Head from "next/head";
import { Fragment } from "react";
import Navbar from "@Components/Navbar";
import ImageProfile from "@Components/ImageProfile";
import Footer from "@Components/Footer";

export default function Home() {
  return (
    <Fragment>
      <main>
        <Head>
          <title>I'am &#8729; Aristo Caesar Pratama</title>
        </Head>
        <Navbar />
        <ImageProfile socialMedia={true} />
      </main>
      <Footer />
    </Fragment>
  );
}
