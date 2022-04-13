import { Fragment } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Fragment>
      <h1 className="text-center font-bold text-white">Aristoc.Space</h1>
      <nav className="mt-6 mb-10">
        <ul className="flex gap-x-5 justify-center">
          <li>
            <Link href="/">
              <a className="text-white font-thin">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/experiments">
              <a className="text-white font-thin">Experiments</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white font-thin">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
