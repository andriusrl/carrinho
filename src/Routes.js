import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;