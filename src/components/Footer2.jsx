import React from "react";
import Linkss from "./common/Linkss";
import FooterNav from "./common/FooterNav";
import "../svg.css";
import "../css/fot2.css";
import Spy from "./ScrollSpy/Spy";

function Footer2() {
  return (
    <div className="foot2">
      {/* <Spy navTabId={5} /> */}
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
          </div>

          <div className="footer-navs">
            <FooterNav
              dd={"Home"}
              dt={["About", "Services", "Portoflio", "Contact"]}
            />
            <FooterNav dd={"PORFOLIO"} dt={["Art", "UX/UI", "Showcase"]} />
            <FooterNav
              dd={"Services"}
              dt={["Web design", "Caoching", "Branding"]}
            />
          </div>
        </div>
        <div className="glit">
          <blink></blink>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
