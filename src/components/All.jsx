import React, { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Landing from "./Landing";
import GetTo from "./GetTo";
import SomeOf from "./SomeOf";
import WhatI from "./WhatI";
import WhatI2 from "./WhatI2";
import Contact2 from "./Contact/Contact2";
import Footer2 from "./Footer2";

function All() {
  const cursor = document.getElementById("Cursor");

  const handleMouseMove = (e) => {
    e.persist();
    try {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY + "px";
    } catch (error) {
      console.log("errorrorororro");
    }
  };

  // uncomment this top enable 'follower mouse'
  const refCur = React.useRef();
  setTimeout(() => {
    const cursor = document.getElementById("Cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, 200);

  return (
    <motion.div className="all" id="All">
      <Navbar />
      <div className="top">
        <div className="back"></div>
        <Landing />
        <GetTo />
        <SomeOf />
        <WhatI />
        <WhatI2 />
        <Contact2 />

        <Footer2 />
      </div>
      <div className="cursor" id="Cursor" ref={refCur}></div>
    </motion.div>
  );
}

export default All;
