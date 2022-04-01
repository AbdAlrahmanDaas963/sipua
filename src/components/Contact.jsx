import React, { useState } from "react";
import IsEmail from "isemail";

import FormInput from "./common/FormInput";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [trueEmail, setTrueEmail] = useState(true);

  function validate(email) {
    const tru = IsEmail.validate(email) ? true : false;
    setTrueEmail(tru);
  }
  const controls = useAnimation();
  // const { ref, inView } = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     const prog = document.getElementById("Progress");
  //     if (document.querySelector("#All").offsetWidth < 1201) {
  //       console.log("mobile");
  //       prog.style.width = "100% ";
  //       prog.style.height = "2px";
  //     } else {
  //       console.log("lap");
  //       prog.style.height = "100% ";
  //       prog.style.width = "2px";
  //     }
  //   }
  // }, [controls, inView]);
  return (
    <motion.div animate={controls} className="h-100vh contact" id="Contact">
      <div className="contact-in">
        <div className="contact-head">Contact me</div>
        <div className="contact-form">
          <form action="">
            <div className="row">
              <div className="contact-title">name</div>
              <input
                className="text-input"
                type="text"
                placeholder="Van gogh"
              />
            </div>
            <div className="row">
              <div className="contact-title">email</div>
              {/* <input
                className="text-input"
                type="text"
                placeholder="CreativeMf@gmail.com"
              /> */}
              <FormInput
                type={"email"}
                validate={validate}
                error={!trueEmail}
              />
            </div>
            <div className="row">
              <div className="contact-title">Message</div>
              <textarea
                className="text-input text-area"
                type="text"
                cols="10"
                rows="2"
                placeholder="Hi bro let's do some collab 
I open on Wednesday and Tuesday"
              />
            </div>
            {/* <div className="row">
              <div className="contact-title">Message</div>
              <input
                className="text-input"
                type="text"
                placeholder="Hi bro let's do some collab I open on Wednesday and Tuesday"
              />
            </div> */}
            <div className="send-row">
              <input className="send" type="submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
