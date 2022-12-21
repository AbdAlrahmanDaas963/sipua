import React from "react";
import { Link } from "react-router-dom";

function BackBtn({ to }) {
  return (
    <div className="back-btn">
      <Link to={to}>
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.99997H4.414L9.707 1.70697L8.293 0.292969L0.585999 7.99997L8.293 15.707L9.707 14.293L4.414 8.99997H19V6.99997Z"
            fill="#EEF6F8"
            fillOpacity="0.5"
          />
        </svg>
      </Link>
    </div>
  );
}

export default BackBtn;
