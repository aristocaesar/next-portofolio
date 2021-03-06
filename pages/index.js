import Head from "next/head";
import { Fragment } from "react";
import Navbar from "@Components/Navbar";
import ImageProfile from "@Components/ImageProfile";
import Footer from "@Components/Footer";
import Blog from "@Components/Blog";

function Home(props) {
  return (
    <Fragment>
      <main>
        <Head>
          <title>I'am &#8729; Aristo Caesar Pratama</title>
        </Head>
        <Navbar />
        <ImageProfile socialMedia={true} />
        <article className="text-white my-16 text-lg grid gap-y-5">
          <Blog data={props.blogsData} />
        </article>
      </main>
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const blogs = await fetch("http://localhost:8000/blog");

  const blogsData = await blogs.json();

  return {
    props: {
      blogsData,
    },
  };
}

export default Home;
