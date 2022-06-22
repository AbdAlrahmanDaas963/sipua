import All from "./components/All";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import { urls } from "./config/Urls";
import WebDesign from "./components/WebDesign";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import NotFound from "./components/NotFound";
import Contact2 from "./components/Contact/Contact2";
import ShowCase from "./components/ShowCase/ShowCase";
import AllShows from "./components/ShowCase/AllShows";
import LetsTalk from "./components/LetsTalk/LetsTalk";

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
        <Route path="/sipua-ghPages/LetsTalk" component={() => <LetsTalk />} />
        <Route component={() => <ComingSoon />} />
        <Route path="/" exact component={() => <All />} />
        <Route path="/sipua-ghPages" exact component={() => <All />} />
        <Route
          path="/sipua-ghPages/ComingSoon"
          component={() => <ComingSoon />}
        />

        <Route
          path="/sipua-ghPages/webdesign"
          component={() => <WebDesign />}
        />
        <Route path="/sipua-ghPages/ShowCase" component={() => <AllShows />} />
        <Route path="/sipua-ghPages/LetsTalk" component={() => <LetsTalk />} />
      </Switch>
    </div>
  );
}

export default App;
