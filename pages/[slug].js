import Head from "next/head";
import { Fragment } from "react";
import Navbar from "@Components/Navbar";
import ImageProfile from "@Components/ImageProfile";
import Footer from "@Components/Footer";
import Comment from "@Components/Comment";

function BlogSingle(props) {
  const { id, title, content } = props.blogData[0];

  return (
    <Fragment>
      <main>
        <Head>
          <title>I'am &#8729; Aristo Caesar Pratama</title>
        </Head>
        <Navbar />
        <ImageProfile socialMedia={true} />
        <article className="text-white my-16 text-lg grid gap-y-5">
          <h1 className="font-bold text-white">{title}</h1>
          <p className="font-light text-white">{content}</p>
        </article>
        <Comment />
      </main>
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const slug = params.slug;

  const blog = await fetch(`http://localhost:8000/blog/?slug=${slug}`);
  const blogData = await blog.json();

  return {
    props: {
      blogData,
    },
  };
}

export default BlogSingle;
