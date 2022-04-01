import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import BackBtn from "./../common/BackBtn";
import darkSvg from "../../svg/dark.svg";
import topSvg from "../../svg/top.svg";

function Show({ onclick }) {
  const card = useAnimation();
  const [flip, setflip] = useState("animate");
  const [dark, setDark] = useState(0);

  let { path, url } = useRouteMatch();
  const location = useLocation();
  let history = useHistory();

  console.log("first", location.state);

  useEffect(() => {}, []);

  function handleClick() {
    try {
      const shCa = document.getElementById("Showcase");
      shCa.style.display = "grid";
    } catch (error) {}
    history.goBack();
  }
  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function changeMood() {
    if (dark === 0) setDark(1);
    else setDark(0);
  }

  return (
    <div className="show">
      <BackBtn to={"/Sipua_V2/ShowCase"} onClick={handleClick} />
      <motion.div
        animate={{
          filter: `invert(${dark})`,
          transition: { easings: "linear" },
        }}
        className="btns left"
        onClick={() => changeMood()}
      >
        <img src={darkSvg} alt="" width={"50px"} height={"50px"} />
      </motion.div>
      <motion.div
        animate={{
          filter: `invert(${dark})`,
          transition: { easings: "linear" },
        }}
        className="btns right"
        onClick={() => goToTop()}
      >
        <img src={topSvg} alt="" width={"50px"} height={"50px"} />
      </motion.div>
      <img className="show-img" src={location.state.img} alt="" />
      <motion.div
        animate={{
          filter: `invert(${dark})`,
          transition: { easings: "linear" },
        }}
        className="cut"
      ></motion.div>
      <motion.div
        animate={{
          filter: `invert(${dark})`,
          transition: { easings: "linear" },
        }}
        className="fot"
      >
        <button>Let’s collab</button>
        <button>Ask for your piece</button>
      </motion.div>
      <motion.div
        animate={{
          filter: `invert(${dark})`,
          transition: { easings: "linear" },
        }}
        className="card"
      >
        <div className="card-head">
          <h1>{location.state.title}</h1>
          <h2>{location.state.desc}</h2>
        </div>
      </motion.div>
    </div>
  );
}

export default Show;
{
  /* <h1>Show</h1>
<button onClick={handleClick}>Back</button>
<h1>{location.state.title}</h1>
<h2>{location.state.desc}</h2>
<img src={location.state.img} alt="" /> */
}

//  conatiner
//    img 100vh
//    side control btns
//    grey back
//    btns
//  card
//    data

// dark mode button
