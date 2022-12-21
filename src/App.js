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
      <Switch>
        {/* <Route path="/" exact component={() => <ComingSoon />} />
        <Route path="/ComingSoon" exact component={() => <ComingSoon />} />

        <Route path="/Sipua_V2" exact component={() => <All />} />
        <Route path="/Sipua_V2/LetsTalk" component={() => <LetsTalk />} />
        <Route
          path="/sipua-ghPages/ComingSoon"
          exact
          component={() => <ComingSoon />}
        /> */}

        {/* enable */}
        <Route path="/" exact component={() => <All />} />
        <Route path="/LetsTalk" component={() => <LetsTalk />} />
        <Route path="/webdesign" component={() => <WebDesign />} />
        <Route path="/showcase" component={() => <AllShows />} />
        <Route component={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
