import React from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import ShowCase from "./ShowCase";
import Show from "./Show";

function AllShows() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:show`} component={() => <Show />} />
      <Route path={`/Sipua_V2/ShowCase`} component={() => <ShowCase />} />
    </Switch>
  );
}

export default AllShows;
