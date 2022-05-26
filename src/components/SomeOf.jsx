import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { urls } from "../config/Urls";
import Circle from "./common/Circle";
import Spy from "./ScrollSpy/Spy";
import img from "./img/unsplash.png";

function SomeOf() {
  const main = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      main.start("animate");
    } else {
      main.start("initial");
    }
  }, [inView]);

  const boxVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.div ref={ref} className="Box h-100vh some-of pos-rel" id="Porfolio">
      <Spy navTabId={"2"} />
      <motion.div animate={main} variants={boxVariants} className="title">
        Some of
        <br />
        My work
      </motion.div>
      <div className="circles">
        <Circle
          title={"UX/UI"}
          img={img}
          to={`/${urls.main}/webdesign`}
          delay={"0.2"}
        />
        <Circle
          title={"ART"}
          img={img}
          to={`/${urls.main}/web`}
          delay={"0.4"}
        />
        <Circle
          title={"SHOWCASE"}
          img={img}
          to={`/${urls.main}/ShowCase`}
          delay={"0.6"}
        />
      </div>
    </motion.div>
  );
}

export default SomeOf;
