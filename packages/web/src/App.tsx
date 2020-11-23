import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <PublicRoute path="/signin" component={Login} />
          <PublicRoute path="/signup" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PublicRoute path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
