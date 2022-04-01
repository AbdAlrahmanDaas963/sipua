import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhatIPara({ one, two, three, id, delay }) {
  const [ref1, inView1] = useInView();
  const item = document.getElementById(id);

  useEffect(() => {
    if (inView1) {
      console.log("item", item);
      // item.onmouseleave = (e) => {
      //   e.target.style.background = "black";
      //   e.target.style.borderImage = null;
      // };
      // item.addEventListener("mousemove", (e) => {
      //   const rect = e.target.getBoundingClientRect();
      //   const x = e.clientX - rect.left; //x position within the element.
      //   const y = e.clientY - rect.top; //y position within the element.
      //   // e.target.style.background = `black`;
      //   e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
      // });
    } else {
    }
  }, [inView1]);

  if (item) {
    item.onmouseleave = (e) => {
      // console.log("first");
      e.target.style.background = "black";
      e.target.style.borderImage = null;
    };
    item.addEventListener("mousemove", (e) => {
      // console.log("secound");
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left; //x position within the element.
      const y = e.clientY - rect.top; //y position within the element.
      e.target.style.background = `black`;
      e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
    });
  }

  // setTimeout(() => {
  //   item.onmouseleave = (e) => {
  //     console.log("first");
  //     e.target.style.background = "black";
  //     e.target.style.borderImage = null;
  //   };
  //   item.addEventListener("mousemove", (e) => {
  //     console.log("secound");
  //     const rect = e.target.getBoundingClientRect();
  //     const x = e.clientX - rect.left; //x position within the element.
  //     const y = e.clientY - rect.top; //y position within the element.
  //     e.target.style.background = `black`;
  //     e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
  //   });
  // }, 1000);

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
      id={id}
    >
      <div className="para-one">{one}</div>
      <div className="para-two">{two}</div>
      <div className="para-three">{three}</div>
    </motion.div>
  );
}

export default WhatIPara;
