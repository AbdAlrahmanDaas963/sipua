import React, { useState } from "react";
import { motion } from "framer-motion";
import First from "./First";
import Secound from "./Secound";

import { urls } from "../../config/Urls";
import BackBtn from "../common/BackBtn";
import "./letsTalk.css";

function LetsTalk() {
  const [first, setFirst] = useState(true);
  const [secound, setSecound] = useState(false);

  const [firstData, setFirstData] = useState([]);
  const [secoundData, setSecoundData] = useState([]);

  const [title, setTitle] = useState({
    one: "I’m flattered!",
    two: "You just follwed my cta!",
  });
  const [pix, setPix] = useState(0.5);

  function handleNextClick() {
    const dataFirst = [
      document.getElementById("lets-talk-name").value,
      document.getElementById("lets-talk-industry").value,
      {
        collaboration: document.getElementById("inter-coll").checked,
        work: document.getElementById("inter-work").checked,
        askQuestion: document.getElementById("inter-ques").checked,
        other: document.getElementById("inter-othe").checked,
      },
    ];
    setFirstData(dataFirst);
    setFirst(false);
    setSecound(true);
    setTitle({ one: "Sounds intersting", two: "How do you want to contact?" });
    setPix(1);
  }
  function handleSendClick() {
    const dataSecound = [
      document.getElementById("lets-talk-name").value,
      document.getElementById("lets-talk-industry").value,
      document.getElementById("lets-talk-note").value,
    ];

    setSecoundData(dataSecound);
    setFirst(true);
    setSecound(false);
    setTitle({ one: "I’m flattered!", two: "You just follwed my cta!" });
    setPix(0.5);

    console.log("firstData", firstData);
    console.log("secoundData", secoundData);
    console.log("send it");
  }
  console.log(urls.main);
  return (
    <div className="lets-talk">
      <BackBtn to={`/`} />
      <div className="lets-talk-head">
        <div>{title.one}</div>
        <div>{title.two}</div>
      </div>
      <div className="form-talk">
        <First statues={first} handleNextClick={handleNextClick} />
        <Secound statues={secound} handleSendClick={handleSendClick} />
      </div>
      <div className="pix-progress">
        <div className="pix" />
        <motion.div animate={{ opacity: pix }} className="pix" />
      </div>
    </div>
  );
}

export default LetsTalk;

// work with the checkboxes
