import React, { useEffect } from "react";
import {
  useViewportScroll,
  motion,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import Linkss from "./common/Linkss";
import fram from "./img/image-from-rawpixel-id-1230651-original.png";
import Spy from "./ScrollSpy/Spy";

function Landing() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 500]);
  const rotate1 = useTransform(scrollY, [0, 300], [0, 10]);
  const main = useAnimation();
  const link = useAnimation();
  const Left = useAnimation();
  const Right = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      main.start("animate");
      link.start("animate");
      Left.start("animate");
      Right.start("animate");
    } else {
      main.start("initial");
      link.start("initial");
      Left.start("initial");
      Right.start("initial");
    }
  }, [inView]);

  const svg = {
    initial: {},
    animate: {
      transition: { duration: 1 },
      easings: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  };
  const path = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        transitionTimingFunction: "easeOutBack",
      },
    },
  };

  const mainVar = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const linkVar = {
    initial: {
      x: "-50px",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: ".5", delay: ".8" },
    },
  };
  const LeftVar = {
    initial: { x: "-50px", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: "1" } },
  };
  const RightVar = {
    initial: { x: "50px", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: "1" } },
  };

  return (
    <motion.div
      animate={main}
      variants={mainVar}
      className="landing h-100vh"
      id="Home"
    >
      <Spy navTabId={"0"} />
      <motion.div
        style={{
          y: y1,
          rotate: rotate1,
          transition: ".0s ease-out",
        }}
        className="frame"
      >
        <img
          ref={ref}
          className="frame-img"
          src={fram}
          alt=""
          width="100%"
          height="100%"
        />
      </motion.div>
      <div className="landing-body">
        <div className="up">
          <motion.div className="links" variants={linkVar} animate={link}>
            <Linkss />
          </motion.div>
          <div className="welcome">
            <div className="wel">
              <motion.div
                variants={LeftVar}
                animate={Left}
                className="d-flex wel-in"
              >
                <p>Welcome To my space!</p>
                <p>I'm Sipua</p>
              </motion.div>
              <div className="line">
                <motion.svg
                  variants={svg}
                  initial="initial"
                  animate="animate"
                  xmlns="http://www.w3.org/2000/svg"
                  width="271.706"
                  height="200.708"
                  viewBox="0 0 271.707 270.708"
                >
                  <motion.path
                    variants={path}
                    id="Path_24"
                    data-name="Path 24"
                    d="M-19155.863,4599.2l271,270"
                    transform="translate(19156.217 -4598.841)"
                    fill="none"
                    stroke="rgba(238,246,248,0.61)"
                    stroke-width="1"
                    opacity="0.5"
                  />
                </motion.svg>
              </div>
              <motion.div className="i-do" variants={RightVar} animate={Right}>
                <p>I do art & UX/UI</p>
              </motion.div>
            </div>
            <motion.div onClick={() => console.log("object")} className="talk">
              {" "}
              Let's Talk
            </motion.div>
          </div>
        </div>
        <motion.div
          className="down"
          initial={{ x: "50px", y: "50px", opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: ".5", delay: ".8" },
          }}
        >
          <div className="div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="31.5"
              viewBox="0 0 36 31.5"
            >
              <path
                id="Icon_awesome-quote-left"
                data-name="Icon awesome-quote-left"
                d="M32.625,18H27V13.5A4.5,4.5,0,0,1,31.5,9h.563A1.683,1.683,0,0,0,33.75,7.313V3.938A1.683,1.683,0,0,0,32.063,2.25H31.5A11.247,11.247,0,0,0,20.25,13.5V30.375a3.376,3.376,0,0,0,3.375,3.375h9A3.376,3.376,0,0,0,36,30.375v-9A3.376,3.376,0,0,0,32.625,18Zm-20.25,0H6.75V13.5A4.5,4.5,0,0,1,11.25,9h.563A1.683,1.683,0,0,0,13.5,7.313V3.938A1.683,1.683,0,0,0,11.813,2.25H11.25A11.247,11.247,0,0,0,0,13.5V30.375A3.376,3.376,0,0,0,3.375,33.75h9a3.376,3.376,0,0,0,3.375-3.375v-9A3.376,3.376,0,0,0,12.375,18Z"
                transform="translate(0 -2.25)"
                fill="#446ee2"
              />
            </svg>
            <div className="up-line"></div>
            <div className="div3">
              <p>
                <span>May I never be</span> complete,
              </p>
              <p>
                <span>May I never be</span> content,
              </p>
              <p>
                <span>May I never be</span> perfect.
              </p>
              <p>Chuck Palahnuik ~ Fight club</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Landing;
