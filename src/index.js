import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./short.css";
import "./media.css";
import "./css/navbar.css";
import "./css/Landing.css";
import "./css/GetTo.css";
import "./css/Some-of.css";
import "./css/WhatI.css";
import "./css/WhatI2.css";
import "./css/Contact.css";
import "./css/footer.css";
import "./css/webdesign.css";
import "./components/ScrollSpy/scrollspy.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 16 / 11  [1 hour]
// 17 / 11  [1 hour]
// 21 / 11  [1.5 hour]
// 22 / 11  [1.75 hour]
// 23 / 11  [9:30 AM => 10:20 AM]
// 23 / 11  [11: 08 AM => 12: 04 PM]
// 23 / 11  [2.5 hour]
// 24 / 11  [6: 30 PM => 7: 55 PM]
// 26 / 11  [1 hour]
// 29 / 11  [1 hour]
// 30 / 11  [3 hour]
// 01 / 12  [6:09 PM => 9:46 PM]
// 02 / 12  [3 hour]
// 04 / 12  [1:00 PM => 2:16 PM]
// 04 / 12  [2 hour]
// 05 / 12  [1 hour]
// 06 / 12  [.5 hour]
// 07 / 12  [09:11 AM]
// 11 / 12  [.5 hour]
// 12 / 12  [1 hour]
// 13 / 12  [1 hour]
// 14 / 12  [09:25 AM => 10:15 AM]
// 20 / 12  [10:30 AM => 11:30 AM]
// 22 / 12  [.5 hour]
// 23 / 12  [1.5 hour]
// 24 / 12  [2 hours]
// 25 / 12  [1 hour]
// 25 / 12  [1 hour]
// 26 / 12  [2 hours]
// 27 / 12  [10:05 AM => 10:54 AM]
// 29 / 12  [06:00 PM => -- ]
// => finish coding and responsive
// => start animation
// 2 / 11 [10:00 PM => 1 AM ] {coding}{researching}
// 2 / 16 [12:44 PM => -- ] {coding}
// 2 / 17 [02:15 PM => -- ] {coding}

// TO-DO{
//   1 getting top scrolling is done.
//   2 make all the media with this :
//      768px
//      769px  992px
//      993px
//   3 [navbar ready but button not] - [landing ready] - [get to ready] - [some of ready] - [what i ready] - [what i 2 ready]
//   4 [contact]
//   5 navbar.css last line
//   6 navbar.jsx last line
//   7 navbar.jsx onclick change the scroll spy -- still  AAAAAAAA
//   working with contact section
//   scrollspy for Href [i tried a lib but somthing is wrong]
//   footer done
//   starting carousel
// }
