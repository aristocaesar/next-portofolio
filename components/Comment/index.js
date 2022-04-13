import Panel from "./panel";
// import nodemailer from "nodemailer";
import { useRef } from "react";

export default function Comment(props) {
  const nama_lengkap = useRef(null);
  const email = useRef(null);
  const tanggapan = useRef(null);

  function sumbitForm(e) {
    e.preventDefault();

    if (
      nama_lengkap.current.value == "" &&
      email.current.value == "" &&
      tanggapan.current.value == ""
    ) {
      console.log(email.current);
    }
    console.log(email.current);
  }

  return (
    <form className="comment text-white ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-8">
        <Panel label="Nama Lengkap" type="text" reference={nama_lengkap} />
        <Panel label="Email" type="email" reference={email} />
        <Panel label="Tanggapan" type="textarea" reference={tanggapan} />
      </div>
      <button
        type="button"
        className="text-white font-light bg-gray-800 mt-4 px-4 py-1 text-lg"
        onClick={sumbitForm}
      >
        Kirim
      </button>
    </form>
  );
}
