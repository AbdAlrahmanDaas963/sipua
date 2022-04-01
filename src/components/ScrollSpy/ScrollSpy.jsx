import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import inView from "./scrollService";

import "./scrollspy.css";
import NavSpy from "./NavSpy";
import Spy1 from "./Spy1";
import Spy2 from "./Spy2";

function ScrolSpy() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  useEffect(() => {
    inView(inView2, "one2");
    inView(inView3, "one3");
    inView(inView4, "one4");
  }, [inView2, inView3, inView4]);
  return (
    <div>
      <NavSpy />

      <div className="content">
        <Spy1 />
        <Spy2 />
        <div className="itemm" id="ref3">
          <div ref={ref3} className="spy"></div>
        </div>
        <div className="itemm" id="ref4">
          <div ref={ref4} className="spy"></div>
        </div>
      </div>
    </div>
  );
}

export default ScrolSpy;
