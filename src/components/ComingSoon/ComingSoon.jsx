import React, { useState } from "react";
import IsEmail from "isemail";

import FormInput from "../common/FormInput";
import Linkss from "./../common/Linkss";
import Fram from "../img/soon.png";
import "./soon.css";

function ComingSoon() {
  const [trueEmail, setTrueEmail] = useState(true);
  const [text, setText] = useState("");

  function validate(email) {
    const tru = IsEmail.validate(email) ? true : false;
    setText(tru);
    setTrueEmail(tru);
  }
  return (
    <div className="coming-soon">
      <div className="soon-body">
        <div className="img">
          <img src={Fram} alt="" width="100%" height="100%" />
        </div>
        <div>Launching soon</div>
        <div>Thank you for waiting</div>
        <div>sipua.inbox@gmail.com</div>
      </div>
      <div className="soon-form">
        <div>Your Email</div>
        <FormInput type={"email"} validate={validate} error={!trueEmail} />
        <button className="notify" disabled={!trueEmail}>
          Notify me
        </button>
      </div>
      <div className="soon-footer">
        <div>Let’s keep in touch</div>
        <Linkss />
      </div>
    </div>
  );
}

export default ComingSoon;
