export default function Panel(props) {
  const { label, type, reference } = props;

  let input_name = label.toLowerCase();

  if (input_name.includes(" ")) {
    input_name = input_name.replace(" ", "_");
  }

  if (type != "textarea") {
    return (
      <div className="comment-panel">
        <h4 className="font-bold">{label}</h4>
        <input
          ref={reference}
          type={type}
          name={input_name}
          placeholder={label}
          className="md:w-[88%] mt-3 bg-transparent border border-slate-400 py-1 px-3"
          required
        />
      </div>
    );
  } else {
    return (
      <div className="comment-panel">
        <h4 className="font-bold">{label}</h4>
        <textarea
          name={input_name}
          ref={reference}
          className="md:w-[88%] mt-3 bg-transparent border border-slate-400 py-1 px-3"
          required
        />
      </div>
    );
  }
}
