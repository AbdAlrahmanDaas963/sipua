import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Spy from "./ScrollSpy/Spy";

function GetTo() {
  const main = useAnimation();
  const Par = useAnimation();
  const line = useAnimation();
  const lineVer = useAnimation();
  const one = useAnimation();
  const two = useAnimation();
  const three = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      main.start("animate");
      Par.start("animate");
      line.start("animate");
      lineVer.start("animate");
      one.start("animate");
      two.start("animate");
      three.start("animate");
    } else {
      main.start("initial");
      Par.start("initial");
      line.start("initial");
      lineVer.start("initial");
      one.start("initial");
      two.start("initial");
      three.start("initial");
    }
  }, [inView]);
  const oneVar = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0,
      },
    },
  };
  const twoVar = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const threeVar = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };
  const mainVar = {
    initial: {
      y: "-10px",
      opacity: 0,
    },
    animate: {
      y: "0px",
      opacity: 1,
    },
  };
  const ParVar = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: "1" },
    },
  };
  const lineVar = {
    initial: {
      width: "0px",
    },
    animate: {
      width: "100%",
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  const lineVerVar = {
    initial: {
      height: "0px",
    },
    animate: {
      height: "90%",
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  return (
    <motion.div
      animate={main}
      variants={mainVar}
      className="get-to pos-rel"
      id="About"
    >
      <Spy navTabId={"1"} />
      <motion.div className="side" animate={one} variants={oneVar}>
        Get to
        <br /> know me
      </motion.div>
      <div className="main">
        <motion.div className="get-head" animate={two} variants={twoVar}>
          <div className="in">
            <div className="one">
              Abdulkader <span>Attoura</span>
            </div>
            <div className="two">Known as Sipua</div>
          </div>
          <div className="theline">
            <motion.div
              className="newline"
              variants={lineVar}
              animate={line}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="get-body" animate={three} variants={threeVar}>
          <div className="get-para">
            <div className="theline-ver">
              <motion.div
                className="newline-ver"
                variants={lineVerVar}
                animate={lineVer}
              ></motion.div>
            </div>
            <motion.div className="in" variants={ParVar} animate={Par}>
              <div className="para-p1">
                Tech & Art nerd with a mission to help humans understand and
                improve the creative process, Skilled in aesthetics and
                strategic thinking, and always willing to make projects that
                include visuals, psychology, and technology.
              </div>
              <div className="para-p2">
                Sipua is my personal brand name that I came up with many years
                ago and stuck with me till now.
              </div>
            </motion.div>
          </div>
          <motion.div variants={ParVar} animate={Par} className="get-det">
            <div ref={ref} className="in">
              <div className="lef">
                <div>Born and live:</div>
                <div>Work title:</div>
                <div>Study:</div>
              </div>
              <div className="rig">
                <div> Hama Syria</div>
                <div> Art director & UXUI designer</div>
                <div> Software engineering</div>
              </div>
            </div>
            <div className="theline">
              <motion.div
                className="newline"
                variants={lineVar}
                animate={line}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className="get-num">
          <div className="in">
            <div className="col col1">
              <div className="num">7</div>
              <div className="titl">Years of experience</div>
            </div>
            <div className="col col2">
              <div className="num">+25</div>
              <div className="titl">Happy client</div>
            </div>
            <div className="col col3">
              <div className="num">15</div>
              <div className="titl">Student</div>
            </div>
          </div>
          <div className="mark">More about me</div>
        </div>
      </div>
    </motion.div>
  );
}

export default GetTo;

// re structure it --done
