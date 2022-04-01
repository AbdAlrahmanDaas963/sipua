import React from "react";

function FooterNav({ dd, dt }) {
  return (
    <div className="foot-nav">
      <div className="dd">{dd}</div>
      <div className="dt">
        {dt.map((item) => (
          <a key={item} href={{}}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
// href can be passed in opjects
export default FooterNav;
