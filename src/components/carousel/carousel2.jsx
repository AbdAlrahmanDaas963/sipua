import React, { useState, useEffect } from "react";
import { Page, Frame } from "framer";

import FrItem from "./common/FrItem";
import "./carousel.css";

import pic1 from "./img/pic1.png";
import pic2 from "./img/pic2.png";
import pic3 from "./img/pic3.png";

function Carousel2() {
  const [current, setCurrent] = useState(1);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [width, setWidth] = useState("380px");

  useEffect(() => {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setWidth("320px");
      console.log("small");
    } else if (screenWidth > 769 && screenWidth < 992) {
      setWidth("370px");
      console.log("med");
    } else {
      setWidth("380px");
      console.log("large");
    }
  }, []);

  function handlePageChange(e) {
    setCurrent(e);
    e === 0 ? setLeft(true) : setLeft(false);
    e === 3 ? setRight(true) : setRight(false);
  }

  return (
    <div className="carousel2" id="carousel2">
      <Page
        width={width}
        height={"200px"}
        radius={30}
        overflow={"visible"}
        center
        directionLock
        currentPage={current}
        onChangePage={handlePageChange}
        className="page"
      >
        <Frame backgroundColor={"rgba(255, 255, 255, 0)"}>
          <FrItem
            title={"AsdamSoft Webpage"}
            img={pic1}
            backgroundColor={"#582CDD"}
          />
        </Frame>
        <FrItem
          title={"AsdamSoft Webpage"}
          img={pic2}
          backgroundColor={"#F3A43C"}
        />
        <FrItem
          title={"AsdamSoft Webpage"}
          img={pic3}
          backgroundColor={"#C69C88"}
        />
        <FrItem
          title={"AsdamSoft Webpage"}
          img={pic1}
          backgroundColor={"#582CDD"}
        />
      </Page>
      <div className="controls">
        <button
          disabled={left}
          className="button1 control-btns"
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9L9 17"
              stroke="#EEF6F8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          disabled={right}
          className="button2 control-btns"
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 9L1 17"
              stroke="#EEF6F8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel2;
