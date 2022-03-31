import Head from "next/head";
import Navbar from "@Components/Navbar";
import ImageProfile from "@Components/ImageProfile";
import { Fragment } from "react";
import Footer from "@Components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <Fragment>
      <main>
        <Head>
          <title>About &#8729; Aristo Caesar Pratama </title>
        </Head>
        <Navbar />
        <ImageProfile socialMedia={true} />
        <article className="text-white my-16 text-lg grid gap-y-5">
          <p>
            Hi. I'm <b>Aristo Caesar Pratama</b>.
          </p>
          <p>I'am backend website developer and digital businness.</p>
          <p>
            Now I'm studying in the department of informatics engineering, here
            i can explore learning about software like Desktop Application,
            Android, Website development to Artificial Intelligence.
          </p>
          <p>
            Besides that, I am also building a startup in the digital field
            marketing, in this business, I offer various services such as
            design, website development, server configuration to services SEO
            (Search Engine Optimize) website, I named this startup DKODE
            Creative.
          </p>
          <div className="linked">
            <p>
              Check out my{" "}
              <Link href="/experiments">
                <a className="underline">project</a>
              </Link>
            </p>
            <p>
              My{" "}
              <Link href="/Curriculum Vitae - Aristo Caesar Pratama.pdf">
                <a className="underline" target="_blank">
                  curriculum vitae
                </a>
              </Link>
            </p>
            <p>
              Message{" "}
              <Link href="https://api.whatsapp.com/send?phone=85235119101&text=Hello%20Aristo!">
                <a className="underline" target="_blank">
                  me
                </a>
              </Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </Fragment>
  );
}
