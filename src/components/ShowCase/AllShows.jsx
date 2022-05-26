import React from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";

import { urls } from "../../config/Urls";
import ShowCase from "./ShowCase";
import Show from "./Show";

function AllShows() {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:show`} component={() => <Show />} />
      <Route path={`/${urls.main}/ShowCase`} component={() => <ShowCase />} />
    </Switch>
  );
}

export default AllShows;
