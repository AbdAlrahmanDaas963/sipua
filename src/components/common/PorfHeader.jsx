import React from "react";

function PorfHeader({ title, desc }) {
  return (
    <div className="PorfHeader">
      <div className="HeaderTit">{title}</div>
      <div className="HeaderDesc">{desc}</div>
    </div>
  );
}

export default PorfHeader;
