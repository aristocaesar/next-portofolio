import Image from "next/image";
import SocialMedia from "@Components/SocialMedia";

export default function ImageProfile(props) {
  return (
    <div className="text-center">
      <Image
        className="rounded-full"
        src="/aristo-caesar-pratama.jpg"
        width={170}
        height={170}
      />
      {props.socialMedia == true ? <SocialMedia /> : ""}
    </div>
  );
}
