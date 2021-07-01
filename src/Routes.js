import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./containers/Cart";
import Main from "./containers/Main";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/carrinho" component={Cart} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;