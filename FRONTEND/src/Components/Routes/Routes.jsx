import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import BaseLayout from "../BaseLayout/BaseLayout";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" /> }
          </Route>
          <Route path={"/login"} exact component={() => <Login />} />
          {/* <Route
            path={"/home"}
            exact
            component={(props) => <BaseLayout {...props} />}
          /> */}
          <Route
            path={"/map"}
            exact
            component={(props) => (
              <BaseLayout componentToRender={"Map"} {...props} />
            )}
          />
          
          <Route
            path={"/registration/clients"}
            exact
            component={(props) => (
              <BaseLayout componentToRender={"ClientRegistration"} {...props} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
