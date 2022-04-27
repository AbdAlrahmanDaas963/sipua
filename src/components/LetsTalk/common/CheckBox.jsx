import React, { useState } from "react";

function CheckBox({ label = "label", id = "ch-box-1" }) {
  const [state, setState] = useState(false);
  const ref = React.createRef();
  function handleClick() {
    console.log(ref.current.checked);
    setState(!state);
  }
  const checkClass = state ? "checked" : "";
  return (
    <div className="custome-checkbox-container" onClick={handleClick}>
      <input
        className="checkbox-btn"
        type="checkbox"
        name="intersted"
        id={id}
        value={"Other"}
        ref={ref}
        checked={state}
        readOnly
      />
      <div className={`custome-checkbox ${checkClass}`} />
      <div className="custome-checkbox-label">{label}</div>
    </div>
  );
}

export default CheckBox;
