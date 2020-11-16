import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./layouts/Home";
import Login from "./layouts/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <div>Sign in</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
