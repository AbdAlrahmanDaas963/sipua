import React from "react";

function Header() {
  function handleSlide(statues) {
    console.log(statues);
    if (statues === "down") {
      document.getElementById("Slide").style.height = "100vh";
      document.getElementById("Slide").style.display = "flex";
    }
    if (statues === "up") {
      document.getElementById("Slide").style.height = "0";
      document.getElementById("Slide").style.display = "flex";
    }
  }
  return (
    <div className="h-100vh footer">
      <div className="glitch">
        <div className="footer-head">
          <div>thank you for passing by!</div>
          <div>Abdulkader Attoura AKA Sipua</div>
        </div>

        <div className="footer-body">
          <Linkss />

          <div className="body-in">
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
        </div>
      </div>
    </div>
    // <div className="header">
    //     <div className="head">
    //         <div className="logo">Sipua</div>
    //         <div onClick={()=>handleSlide("down")} className="more">=</div>
    //     </div>

    //     <div className="slide" id="Slide">
    //         <div className="less">
    //             <div className="logo">Sipua</div>
    //             <div onClick={()=>handleSlide("up")} className="more">*</div>
    //         </div>
    //         {/* <div className="blank"></div> */}
    //         <div className="tabs">
    //             <ul>
    //                 <li>Home</li>
    //                 <li>About</li>
    //                 <li>Porfolio</li>
    //                 <li>Services</li>
    //                 <li>resources</li>
    //                 <li>Blog</li>
    //             </ul>
    //         </div>
    //         <div className="links">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15.11" height="15.11" viewBox="0 0 20.11 20.11">
    //                 <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(1 1)" opacity="0.4">
    //                     <path id="Path_1" data-name="Path 1" d="M7.528,3h9.055A4.528,4.528,0,0,1,21.11,7.528v9.055a4.528,4.528,0,0,1-4.528,4.528H7.528A4.528,4.528,0,0,1,3,16.583V7.528A4.528,4.528,0,0,1,7.528,3Z" transform="translate(-3 -3)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_2" data-name="Path 2" d="M19.316,15.045a3.645,3.645,0,1,1-3.071-3.071,3.645,3.645,0,0,1,3.071,3.071Z" transform="translate(-6.616 -6.564)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_3" data-name="Path 3" d="M26.25,9.75h0" transform="translate(-12.214 -5.675)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                 </g>
    //             </svg>
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15.11" height="15.11" viewBox="0 0 20.11 20.11">
    //                 <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(1 1)" opacity="0.4">
    //                     <path id="Path_1" data-name="Path 1" d="M7.528,3h9.055A4.528,4.528,0,0,1,21.11,7.528v9.055a4.528,4.528,0,0,1-4.528,4.528H7.528A4.528,4.528,0,0,1,3,16.583V7.528A4.528,4.528,0,0,1,7.528,3Z" transform="translate(-3 -3)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_2" data-name="Path 2" d="M19.316,15.045a3.645,3.645,0,1,1-3.071-3.071,3.645,3.645,0,0,1,3.071,3.071Z" transform="translate(-6.616 -6.564)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_3" data-name="Path 3" d="M26.25,9.75h0" transform="translate(-12.214 -5.675)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                 </g>
    //             </svg>
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15.11" height="15.11" viewBox="0 0 20.11 20.11">
    //                 <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(1 1)" opacity="0.4">
    //                     <path id="Path_1" data-name="Path 1" d="M7.528,3h9.055A4.528,4.528,0,0,1,21.11,7.528v9.055a4.528,4.528,0,0,1-4.528,4.528H7.528A4.528,4.528,0,0,1,3,16.583V7.528A4.528,4.528,0,0,1,7.528,3Z" transform="translate(-3 -3)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_2" data-name="Path 2" d="M19.316,15.045a3.645,3.645,0,1,1-3.071-3.071,3.645,3.645,0,0,1,3.071,3.071Z" transform="translate(-6.616 -6.564)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_3" data-name="Path 3" d="M26.25,9.75h0" transform="translate(-12.214 -5.675)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                 </g>
    //             </svg>
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15.11" height="15.11" viewBox="0 0 20.11 20.11">
    //                 <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(1 1)" opacity="0.4">
    //                     <path id="Path_1" data-name="Path 1" d="M7.528,3h9.055A4.528,4.528,0,0,1,21.11,7.528v9.055a4.528,4.528,0,0,1-4.528,4.528H7.528A4.528,4.528,0,0,1,3,16.583V7.528A4.528,4.528,0,0,1,7.528,3Z" transform="translate(-3 -3)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_2" data-name="Path 2" d="M19.316,15.045a3.645,3.645,0,1,1-3.071-3.071,3.645,3.645,0,0,1,3.071,3.071Z" transform="translate(-6.616 -6.564)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_3" data-name="Path 3" d="M26.25,9.75h0" transform="translate(-12.214 -5.675)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                 </g>
    //             </svg>
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15.11" height="15.11" viewBox="0 0 20.11 20.11">
    //                 <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(1 1)" opacity="0.4">
    //                     <path id="Path_1" data-name="Path 1" d="M7.528,3h9.055A4.528,4.528,0,0,1,21.11,7.528v9.055a4.528,4.528,0,0,1-4.528,4.528H7.528A4.528,4.528,0,0,1,3,16.583V7.528A4.528,4.528,0,0,1,7.528,3Z" transform="translate(-3 -3)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_2" data-name="Path 2" d="M19.316,15.045a3.645,3.645,0,1,1-3.071-3.071,3.645,3.645,0,0,1,3.071,3.071Z" transform="translate(-6.616 -6.564)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                     <path id="Path_3" data-name="Path 3" d="M26.25,9.75h0" transform="translate(-12.214 -5.675)" fill="none" stroke="#eef6f8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    //                 </g>
    //             </svg>
    //         </div>
    //     </div>

    // </div>
  );
}

export default Header;
