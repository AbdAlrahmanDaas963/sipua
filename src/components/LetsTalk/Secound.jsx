import React from "react";
import ContactInput from "../Contact/common/ContactInput";
import { motion, useAnimation } from "framer-motion";

function Secound({ statues, handleSendClick }) {
  const Var = {
    show: {
      opacity: 1,
      zIndex: 2,
    },
    hide: {
      opacity: 0,
      zIndex: 1,
    },
  };
  return (
    <motion.div
      variants={Var}
      initial={"hide"}
      animate={statues ? "show" : "hide"}
      className="lets-talk-secound"
    >
      <div className="lets-talk-in lets-talk-first-in">
        <div className="left-col">
          <div>Email</div>
          <div>Phone</div>
          <div>Note</div>
        </div>
        <div className="right-col">
          <div className="right-col-small">
            <div className="hide-small">Email</div>
            <input
              className={`text-input input lets-talk-input`}
              type="text"
              name=""
              id="lets-talk-email"
              placeholder="Elon_tusk@gmail.com"
            />
          </div>
          <div className="right-col-small">
            <div className="hide-small">Phone</div>
            <input
              className={`text-input input lets-talk-input`}
              type="text"
              name=""
              id="lets-talk-phone"
              placeholder="+963999999999"
            />
          </div>
          <div className="right-col-small">
            <div className="hide-small">Note</div>
            <input
              className={`text-input input lets-talk-input`}
              type="text"
              name=""
              id="lets-talk-note"
              placeholder="Van gogh"
            />
          </div>
        </div>
      </div>

      <div className="lets-talk-btn">
        <button className="send" onClick={handleSendClick}>
          Send
        </button>
      </div>
    </motion.div>
  );
}

export default Secound;
