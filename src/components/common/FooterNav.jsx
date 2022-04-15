import React from "react";

function FooterNav({ dd, dt, href }) {
  return (
    <div className="foot-nav">
      <div className="dd">{dd}</div>
      <div className="dt">
        {dt.map((item) => (
          <a key={item.to} href={`${item.to}`}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
// href can be passed in opjects
export default FooterNav;
