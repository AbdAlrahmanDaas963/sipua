import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import Linkss from "./common/Linkss";
import Href from "./common/Href";

function Navbar() {
  const [state, setstate] = useState(true);
  const [flipFlop, setflipFlop] = useState(true);

  const [clicks, setClicks] = useState([
    { id: 0, href: "Home", statues: true },
    { id: 1, href: "About", statues: false },
    { id: 2, href: "Porfolio", statues: false },
    { id: 3, href: "Services", statues: false },
    { id: 5, href: "Contact", statues: false },
  ]);

  // progress
  const { scrollYProgress } = useViewportScroll();
  const initial = useTransform(scrollYProgress, (x) => x + 0.05);

  function handleSlide() {
    setstate(!state);
    const silde = document.getElementById("Slide");

    if (state) {
      silde.style.height = "100vh";
      silde.style.borderBottomRightRadius = "0";
      silde.style.borderBottomLeftRadius = "0";
    } else {
      silde.style.height = "0";
      silde.style.borderBottomRightRadius = "50%";
      silde.style.borderBottomLeftRadius = "50%";
    }
  }
  function menu() {
    const bur1 = document.querySelector(".bur1");
    const bur2 = document.querySelector(".bur2");
    const bur3 = document.querySelector(".bur3");

    if (flipFlop) {
      bur1.style.transform = "translate( -50% , -50% ) rotate(45deg)";
      bur2.style.opacity = "0";
      bur3.style.transform = "translate( -50% , -50% ) rotate(-45deg)";
      setflipFlop(false);
    } else {
      bur1.style.transform = "translate( -50% , -12px )  rotate(0deg)";
      bur2.style.transform = "translate( -50% , -50% )  rotate(0deg)";
      bur2.style.opacity = "1";
      bur3.style.transform = "translate( -50% , 10px ) rotate(0deg)";
      setflipFlop(true);
    }
  }

  function clickHandler(id) {
    handleSlide();
    menu();
    let clone = clicks;
    clone.map((item) => {
      item.statues = false;
    });
    clone.map((item) => {
      if (item.id === id) {
        item.statues = true;
      }
    });

    setClicks(clone);
  }

  const [navAnim, setnavAnim] = useState({});
  useEffect(() => {
    if (window.innerWidth > 1200) {
      setnavAnim({
        initial: {
          x: "200px",
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: ".5",
            transitionTimingFunction: "easeOutBack",
          },
        },
      });
    } else {
      setnavAnim({
        initial: {
          y: "200px",
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: ".5",
            transitionTimingFunction: "easeOutBack",
          },
        },
      });
    }
  }, [window.innerWidth]);

  return (
    <motion.div
      className="sub-nav"
      variants={navAnim}
      initial="initial"
      animate="animate"
    >
      <motion.div
        style={{
          width: 1,
          height: "100%",
          background: "#FFE84F",
          scaleY: initial,
          originY: 0,
        }}
        className="progress"
        id="Progress"
      ></motion.div>
      <div className="navbar">
        <div className="logo">
          <div className="in">Sipua</div>
        </div>
        <div className="slide" id="Slide">
          <div className="tabs">
            <ul>
              {clicks.map((item) => (
                <li key={item.id}>
                  <Href
                    id={item.id}
                    href={item.href}
                    clicked={clickHandler}
                    statues={item.statues}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="links">{/* <Linkss /> */}</div>
        </div>
        <div onClick={handleSlide} className="more">
          <div className="in">
            <button onClick={menu} className="navbar-toggler">
              <div className="bur1 bur1d bur"></div>
              <div className="bur2 bur2d bur"></div>
              <div className="bur3 bur3d bur"></div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;

// try class component
