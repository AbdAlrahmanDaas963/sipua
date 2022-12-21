import React, { useState, useEffect } from "react";

import { urls } from "../../config/Urls";
import { getData } from "./services/fakeCasesService";
import Case from "./Case";
import PorfHeader from "../common/PorfHeader";
import pic1 from "./img/pic1.png";
import pic2 from "./img/pic2.png";
import "./showcase.css";
import "./case.css";
import "./show.css";
import BackBtn from "../common/BackBtn";

export default function ShowCase() {
  const [Data, setData] = useState([]);
  const ref = React.createRef();

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <>
      <div className="showcase" id="Showcase" ref={ref}>
        <BackBtn to={`/#Porfolio`} />
        <PorfHeader
          title={"Showcase"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <div className="cases">
          {Data.map((item) => (
            <Case
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              img={pic2}
            />
          ))}
        </div>
        <div className="showcase-foot">
          <button>Need a website?</button>
          <button>Need a website?</button>
        </div>
      </div>
    </>
  );
}
