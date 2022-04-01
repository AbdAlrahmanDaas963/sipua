import React, { useEffect } from "react";

function ContactInput({ type, validate, error, placeholder }) {
  window.Buffer = window.Buffer || require("buffer").Buffer;
  const ref = React.createRef();
  useEffect(() => {
    if (error) {
      console.log("first", "first");
      console.log("error", error);
    }
    console.log("ref", ref);
    console.log("error", error);
  }, [error]);
  return (
    <div className="subInput">
      <input
        className={`text-input input ${error}`}
        ref={ref}
        type={type}
        name=""
        id=""
        placeholder={placeholder}
        onChange={(e) => validate(e.target.value, type)}
      />
      {error && <div className="wrong wrong-email">invalid {type} </div>}
    </div>
  );
}

export default ContactInput;
