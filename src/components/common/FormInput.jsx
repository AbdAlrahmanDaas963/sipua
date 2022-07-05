import React, { useEffect } from "react";

function FormInput({ type, validate, error, change, err, ...props }) {
  window.Buffer = window.Buffer || require("buffer").Buffer;
  const ref = React.createRef();
  useEffect(() => {
    if (error) {
      console.log("first", "first");
    }
    console.log("ref", ref);
  }, [error]);

  const handle = (e) => {
    validate(e.target.value);
    change(e);
  };
  return (
    <div className="subInput">
      <input
        className={`input ${error}`}
        ref={ref}
        type={type}
        name=""
        id=""
        placeholder="Vangogh@gmail.com"
        onChange={handle}
        {...props}
      />

      {(err && (
        <div className={`wrong wrong-email ${err.type}`}>{err.text}</div>
      )) ||
        (error && <div className="wrong wrong-email">Invalid {type}</div>)}
    </div>
  );
}

export default FormInput;
