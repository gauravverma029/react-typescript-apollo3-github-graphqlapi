import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Issues from "./containers/Issues";
import Comment from "./containers/Comment";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Issues />
        </Route>
        <Route path="/:issueNumber">
          <Comment />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
