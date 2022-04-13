import { Fragment } from "react";
import Head from "next/head";
import Navbar from "@Components/Navbar";
import Footer from "@Components/Footer";

function Experiments(props) {
  console.log(props.repos);

  return (
    <Fragment>
      <main>
        <Head>
          <title>Experiments &#8729; Aristo Caesar Pratama</title>
        </Head>
        <Navbar />
        <h1 className="text-center text-3xl tracking-wide font-bold text-gray-600">
          My Project and Stories
        </h1>
      </main>
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const getRepos = await fetch(
    "https://api.github.com/users/aristocaesar/repos"
  );
  const repos = await getRepos.json();

  return {
    props: {
      repos,
    },
  };
}

export default Experiments;
