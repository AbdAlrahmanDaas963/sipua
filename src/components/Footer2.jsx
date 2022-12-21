import React from "react";
import Linkss from "./common/Linkss";
import FooterNav from "./common/FooterNav";
import "../css/fot2.css";
import { urls } from "../config/Urls";

// uncomment to enable glitch
// import "../svg.css";

function Footer2() {
  const col1 = [
    { label: "About", to: "/#About" },
    { label: "Services", to: "/#Services" },
    { label: "Porfolio", to: "/#Porfolio" },
    { label: "Contact", to: "/#Contact" },
  ];
  const col2 = [
    { label: "Art", to: `/${urls.main}/Art` },
    { label: "UX/UI", to: `/${urls.main}/webdesign` },
    { label: "Show case", to: `/${urls.main}/ShowCase` },
  ];
  const col3 = [
    { label: "Web design", to: `/${urls.main}/Web design` },
    { label: "Caoching", to: `/${urls.main}/Caoching` },
    { label: "Branding", to: `/${urls.main}/Branding` },
  ];

  return (
    <div className="foot2">
      <div className="section">
        <div className="footer-head">
          <div>thank you for passing by!</div>
        </div>

        <div className="footer-body">
          <div>Abdulkader Attoura AKA Sipua</div>

          <Linkss />

          <div className="little-form">
            <div>Your Email to contact</div>
            <input placeholder="Hello@gmail.com" type="text" />
            <button>Keep in touch</button>
          </div>

          <div className="footer-navs">
            <FooterNav dd={"Home"} dt={col1} />
            <FooterNav dd={"PORFOLIO"} dt={col2} />
            <FooterNav dd={"Services"} dt={col3} />
          </div>
        </div>
        {/* <div className="glit">
          <div className="blink"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Footer2;
