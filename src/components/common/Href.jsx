import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { urls } from "../../config/Urls";

function Href({ id, href, clicked, statues }) {
  const controls = useAnimation();

  useEffect(() => {
    if (statues) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [statues]);
  const spanAnim = {
    hidden: { x: "-200px", opacity: 0, height: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      x: "0",
      transition: {
        duration: 0.5,
      },
    },
  };
  const href2 = `${urls.main}/#${href}`;
  return (
    <a href={`/Sipua_V2/#${href}`} onClick={() => clicked(id)} id={id}>
      {" "}
      <motion.span id={`span${id}`}></motion.span> {href}
    </a>
  );
}
// href={`/Sipua_V2/#${href}`}

export default Href;
