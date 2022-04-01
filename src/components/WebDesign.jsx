import React from "react";
import BackBtn from "./common/BackBtn";

import PorfHeader from "./common/PorfHeader";
import Carousel2 from "./carousel/carousel2";

function WebDesign() {
  return (
    <div id="WebDesign" className="h-100vh webdesign">
      <BackBtn to={"/Sipua_V2"} />
      <PorfHeader
        title={"web desgin"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      />
      <Carousel2 />
      <div className="fo">
        <button>Need a website?</button>
      </div>
    </div>
  );
}

export default WebDesign;
