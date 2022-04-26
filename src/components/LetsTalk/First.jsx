import React, { useRef, forwardRef } from "react";
import ContactInput from "../Contact/common/ContactInput";
import { motion } from "framer-motion";

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
              className={`text-input input`}
              type="text"
              name=""
              id="lets-talk-name"
              placeholder="Elon tusk"
            />
          </div>
          <div className="right-col-small">
            <div className="hide-small">Industry</div>
            <input
              className={`text-input input`}
              type="text"
              name=""
              id="lets-talk-industry"
              placeholder="Creative/ tech/ Photography"
            />
          </div>
          <div className="checkboxes">
            <div className="right-col-small">
              <div className="hide-small">Intersted in</div>
              <div className="checkbox-row">
                <input
                  type="checkbox"
                  name="intersted"
                  id="inter-coll"
                  value={"Collaboration"}
                />
                <div className="checkbox-label">Collaboration</div>
              </div>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  name="intersted"
                  id="inter-work"
                  value={"Work"}
                />
                <div className="checkbox-label">Work</div>
              </div>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  name="intersted"
                  id="inter-ques"
                  value={"Ask question"}
                />
                <div className="checkbox-label">Ask question</div>
              </div>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  name="intersted"
                  id="inter-othe"
                  value={"Other"}
                />
                <div className="checkbox-label">Other</div>
              </div>
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
