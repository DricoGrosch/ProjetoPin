import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login/Login";
function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" /> }
          </Route>
          <Route path={"/login"} exact component={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
