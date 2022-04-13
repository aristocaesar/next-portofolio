import Link from "next/link";

export default function Item(props) {
  return (
    <div key={props.key} className={`blog-${props.key} mb-10`}>
      <Link href={props.slug}>
        <a className="font-bold text-xl hover:underline">{props.title}</a>
      </Link>
      <p className="font-light text-sm text-gray-500 py-2">{props.publish}</p>
      <p className="font-thin text-base text-gray-300">
        {props.content.substring(0, 210)} ...
      </p>
    </div>
  );
}
