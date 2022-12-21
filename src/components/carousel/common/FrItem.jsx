import React from "react";
import { motion } from "framer-motion";

function FrItem({ title, img, backgroundColor }) {
  return (
    <motion.div
      className="FrItem"
      whileHover={() => {
        return { filter: "brightness(1.1)", height: "90%" };
      }}
      transition={{
        easing: "ease-in",
        duration: 0.5,
      }}
      initial={{
        backgroundColor,
      }}
    >
      <motion.div
        initial={{
          backgroundColor,
        }}
        className="img-contain"
      >
        <img draggable="false" className="img" src={img} alt="Loading..." />
      </motion.div>
      <div className="hvooore"></div>
      <div className="FrTitle">{title}</div>
    </motion.div>
  );
}
{
  /* <img
      draggable="false"
      className="img"
      src="https://picsum.photos/200"
      alt=""
    /> */
}
export default FrItem;
