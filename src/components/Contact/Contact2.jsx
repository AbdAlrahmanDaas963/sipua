import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import ContactInput from "./common/ContactInput";
import Spy from "../ScrollSpy/Spy";

function Contact2() {
  const [trueEmail, setTrueEmail] = useState(true);
  const [trueName, setName] = useState(true);
  const textRef = React.createRef();

  const validate2 = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      // console.log("Email is Not Correct");
      setTrueEmail(false);
      return false;
    } else {
      setTrueEmail(true);
      // console.log("Email is Correct");
    }
  };
  function handleChange(e) {
    const text = textRef.current.value;
    const lines = text.split("\n");
    const count = lines.length;
    console.log("count: ", count);
    if (count < 6) textRef.current.rows = count;
  }
  const controls = useAnimation();
  return (
    <motion.div
      animate={controls}
      className="h-100vh contact pos-rel"
      id="Contact"
    >
      <Spy navTabId={5} />
      <div className="contact-in">
        <div className="contact-head">Contact me</div>
        <div className="contact-form">
          <form action="">
            <div className="row">
              <div className="contact-title">name</div>

              <ContactInput
                type={"text"}
                validate={validate2}
                placeholder={"Van gogh"}
                error={!trueName}
              />
            </div>
            <div className="row">
              <div className="contact-title">email</div>
              <ContactInput
                type={"email"}
                validate={validate2}
                placeholder={"CreativeMf@gmail.com"}
                error={!trueEmail}
              />
            </div>
            <div className="row">
              <div className="contact-title">Message</div>
              <textarea
                ref={textRef}
                className="text-input text-area input"
                onChange={(e) => handleChange(e)}
                type="text"
                cols="10"
                rows="2"
                placeholder="Hi bro let's do some collab 
I open on Wednesday and Tuesday"
              />
            </div>
            <div className="send-row">
              <input
                disabled={!trueEmail || !trueName}
                className="send"
                type="submit"
                value="send"
              />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact2;

// text area
// onFocus={() => (textRef.current.rows = "8")}
// onBlur={() => (textRef.current.rows = "2")}
