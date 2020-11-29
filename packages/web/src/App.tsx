import React from "react";
import { Switch } from "react-router-dom";
import { useCheckAuthentication } from "./hooks/checkAuthentication";
import Dashboard from "./layouts/Dashboard";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import Register from "./layouts/Register";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";

function App() {
  useCheckAuthentication();
  return (
    <div className="App">
      <Switch>
        <PublicRoute path="/signin" component={Login} />
        <PublicRoute path="/signup" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PublicRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
