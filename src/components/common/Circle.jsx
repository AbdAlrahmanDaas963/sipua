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
    } else {
      main.start("initial");
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

export default Circle;
