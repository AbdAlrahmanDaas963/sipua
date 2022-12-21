import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhatIPara({ one, two, three, id, delay }) {
  const [ref1, inView1] = useInView();
  const item = document.getElementById(id);

  if (item) {
    item.onmouseleave = (e) => {
      e.target.style.background = "rgb(0, 0, 0, 0)";
      e.target.style.borderImage = null;
    };
    item.addEventListener("mousemove", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // e.target.style.background = `rgb(0, 0, 0)`;
      e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
    });
  }

  const animate = inView1
    ? {
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      }
    : null;
  return (
    <motion.div
      ref={ref1}
      initial={{ opacity: 0 }}
      animate={animate}
      className="what-i-para"
    >
      <div className="para-one">{one}</div>
      <div className="para-two">{two}</div>
      <div className="para-three">{three}</div>
      <div className="windows" id={id} />
    </motion.div>
  );
}

export default WhatIPara;
