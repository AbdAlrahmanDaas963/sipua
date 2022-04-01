import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Circle({ title, img, to, delay }) {
  const main = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      main.start("animate");
      console.log("first");
    } else {
      main.start("initial");
      console.log("secound");
    }
  }, [inView]);

  const vari = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
      },
    },
  };
  return (
    <Link to={to}>
      <motion.div ref={ref} variants={vari} animate={main} className="circle">
        <img src={img} alt="" />
        <p>{title}</p>
      </motion.div>
    </Link>
  );
}
// "react-router": "^5.2.1",
// "react-router-dom": "^5.3.0"
export default Circle;
