import Image from "next/image";
import ImagePhoto from "../../public/aristo-caesar-pratama.jpg";
import SocialMedia from "@Components/SocialMedia";

export default function ImageProfile(props) {
  return (
    <div className="text-center">
      <Image
        className="rounded-full"
        src={ImagePhoto}
        width={170}
        height={170}
      />
      {props.socialMedia == true ? <SocialMedia /> : ""}
    </div>
  );
}
