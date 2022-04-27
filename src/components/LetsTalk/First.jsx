import React, { useRef, forwardRef } from "react";
import ContactInput from "../Contact/common/ContactInput";
import { motion } from "framer-motion";
import CheckBox from "./common/CheckBox";

function First({ statues, handleNextClick }) {
  // const input = React.forwardRef();
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
      className="lets-talk-first"
      variants={Var}
      animate={statues ? "show" : "hide"}
    >
      <div className="lets-talk-in lets-talk-first-in">
        <div className="left-col">
          <div>Name</div>
          <div>Industry</div>
          <div>Intersted in</div>
        </div>
        <div className="right-col">
          <div className="right-col-small">
            <div className="hide-small">Name</div>
            <input
              className={`text-input input lets-talk-input`}
              type="text"
              name=""
              id="lets-talk-name"
              placeholder="Elon tusk"
            />
          </div>
          <div className="right-col-small">
            <div className="hide-small">Industry</div>
            <input
              className={`text-input input lets-talk-input`}
              type="text"
              name=""
              id="lets-talk-industry"
              placeholder="Creative/ tech/ Photography"
            />
          </div>
          <div className="checkboxes">
            <div className="right-col-small">
              <div className="hide-small">Intersted in</div>
              <CheckBox label="Collaboration" id="inter-coll" />
              <CheckBox label="Work" id="inter-work" />
              <CheckBox label="Ask question" id="inter-ques" />
              <CheckBox label="Other" id="inter-othe" />
            </div>
          </div>
        </div>
      </div>
      <div className="lets-talk-btn next">
        <button className="next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </motion.div>
  );
}

export default First;
