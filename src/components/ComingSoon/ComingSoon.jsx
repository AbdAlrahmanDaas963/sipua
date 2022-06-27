import React, { useState } from "react";

import FormInput from "../common/FormInput";
import Linkss from "./../common/Linkss";
import Fram from "../img/soon.png";
import "./soon.css";

function ComingSoon() {
  const [trueEmail, setTrueEmail] = useState(true);
  const [text, setText] = useState("");
  const [email, setEmail] = useState();

  const validate2 = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      // console.log("Email is Not Correct");
      setEmail({ email: text });
      setTrueEmail(false);
      return false;
    } else {
      setEmail({ email: text });
      setTrueEmail(true);
      // console.log("Email is Correct");
    }
  };

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
        <FormInput type={"email"} validate={validate2} error={!trueEmail} />
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
