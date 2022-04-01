import React from "react";
import BackBtn from "./common/BackBtn";
import not from "./img/notfound2.png";

function NotFound() {
  return (
    <div className="notfound">
      <BackBtn to={"/Sipua_V2"} />
      <img src={not} alt="" />
      <h1>4o4 NotFound</h1>
    </div>
  );
}

export default NotFound;
