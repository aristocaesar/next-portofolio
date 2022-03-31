import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function SocialMedia(props) {
  return (
    <div className="social-media mt-8">
      <ul className="flex gap-x-5 justify-center">
        <li>
          <Link href="https://www.instagram.com/aristocp">
            <a className="text-white text-lg" target="_blank">
              <FaInstagram />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/aristocaesar">
            <a className="text-white text-lg" target="_blank">
              <FiGithub />
            </a>
          </Link>
        </li>
        <li>
          <Link href="mailto:hi@aristoc.space">
            <a className="text-white text-lg" target="_blank">
              <HiOutlineMail />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
