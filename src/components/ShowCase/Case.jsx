import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Case({ title, desc, img }) {
  let { url } = useRouteMatch();
  function handleClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
