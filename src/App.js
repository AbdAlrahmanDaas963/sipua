import All from "./components/All";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import WebDesign from "./components/WebDesign";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import NotFound from "./components/NotFound";
import Contact2 from "./components/Contact/Contact2";
import ShowCase from "./components/ShowCase/ShowCase";
import AllShows from "./components/ShowCase/AllShows";

function App() {
  return (
    <div className="App">
      {/* <Link
        style={{ position: "absolute", top: " 50vh", zIndex: 2 }}
        to="/Sipua_V2/ComingSoon"
      >
        ComingSoon
      </Link> */}
      {/* <All /> */}
      {/* <WebDesign /> */}

      <Switch>
        <Route path="/" exact component={() => <All />} />
        <Route path="/Sipua_V2" exact component={() => <All />} />
        <Route path="/Sipua_V2/ComingSoon" component={() => <ComingSoon />} />

        <Route path="/Sipua_V2/webdesign" component={() => <WebDesign />} />
        <Route path="/Sipua_V2/ShowCase" component={() => <AllShows />} />

        <Route component={() => <ComingSoon />} />
      </Switch>
    </div>
  );
}

export default App;
