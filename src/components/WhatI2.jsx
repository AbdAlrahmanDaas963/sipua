import React, { useEffect } from "react";

import hour from "./img/hour.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Spy from "./ScrollSpy/Spy";

function WhatI() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  return (
    <motion.div animate={controls} className="what-i-2 pos-rel" id="resources">
      <Spy navTabId={"3"} />
      <div className="what-head2">
        <div className="div">
          <img className="img" src={hour} alt="" />
          {/* <div className="img"></div> */}
          <div>
            What I <br />
            can do <br />
            for you
          </div>
        </div>
      </div>
      <div className="what-body2">
        <div className="r1">Why me?</div>
        <div className="r2">
          <div>No (Designer/Client) Drama.</div>
          <div>Sharing The Process Of Creating.</div>
          <div>Safe Space To Go Crazy With Your Ideas.</div>
          <div>Special Price For Personal Brands & Websites.</div>
        </div>
      </div>
    </motion.div>
  );
}

export default WhatI;
