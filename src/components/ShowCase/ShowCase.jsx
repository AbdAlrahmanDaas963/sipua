import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { getData } from "./services/fakeCasesService";
import Case from "./Case";
import Show from "./Show";
import PorfHeader from "../common/PorfHeader";
import pic1 from "./img/pic1.png";
import pic2 from "./img/pic2.png";
import "./showcase.css";
import "./case.css";
import "./show.css";
import BackBtn from "../common/BackBtn";

export default function ShowCase() {
  const [Data, setData] = useState([]);
  let { path, url } = useRouteMatch();
  const ref = React.createRef();

  useEffect(() => {
    setData(getData());
    console.log("Data", Data);
    console.log("url", url);
    if (url == "/Sipua_V2/ShowCase")
      document.getElementById("Showcase").style.display = "grid";
  }, []);

  function handleCaseClick(dis) {
    console.log(ref.current);

    try {
      const shCa = document.getElementById("Showcase");
      console.log(shCa);
      shCa.style.display = dis;
    } catch (error) {}
  }
  return (
    <>
      <div className="showcase" id="Showcase" ref={ref}>
        <BackBtn to={"/Sipua_V2/#Porfolio"} />
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
              onclick={handleCaseClick}
            />
          ))}
        </div>
        <div className="showcase-foot">
          <button>Need a website?</button>
          <button>Need a website?</button>
        </div>
      </div>

      <Switch>
        <Route
          path={`${path}/:show`}
          component={() => <Show onclick={handleCaseClick} />}
        />
      </Switch>
    </>
  );
}
