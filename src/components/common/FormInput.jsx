import React, { useEffect } from "react";

function FormInput({ type, validate, error }) {
  window.Buffer = window.Buffer || require("buffer").Buffer;
  const ref = React.createRef();
  useEffect(() => {
    if (error) {
      console.log("first", "first");
    }
    console.log("ref", ref);
  }, [error]);
  return (
    <div className="subInput">
      <input
        className={`input ${error}`}
        ref={ref}
        type={type}
        name=""
        id=""
        placeholder="Vangogh@gmail.com"
        onChange={(e) => validate(e.target.value)}
      />
      {error && <div className="wrong wrong-email">Invalid {type}</div>}
    </div>
  );
}

export default FormInput;
