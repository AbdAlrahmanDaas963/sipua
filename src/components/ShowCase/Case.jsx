import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Case({ title, desc, img }) {
  let { path, url } = useRouteMatch();
  function handleClick() {
    try {
      const shCa = document.getElementById("Showcase");
      // shCa.style.display = "none";
    } catch (error) {}
  }
  return (
    <div className="case">
      <img src={img} alt="" />
      <div className="case-title">{title}</div>
      <div className="case-desc">{desc}</div>
      <Link
        to={{
          pathname: `${url}/show`,
          state: {
            title: title,
            desc: desc,
            img: img,
          },
        }}
      >
        <div onClick={handleClick} className="case-more">
          Read more
        </div>
      </Link>
      <div className="case-border"></div>
    </div>
  );
}

export default Case;

/*
  img
  title
  desc
  more
  border
*/
// check the url {from sub component} --> if in show => hide nav : show nav
