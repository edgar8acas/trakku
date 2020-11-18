import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import Dashboard from "./layouts/Dashboard";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import Register from "./layouts/Register";

function App() {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
          <Route
            path="/dashboard"
            render={({ location }) =>
              auth?.user ? (
                <Dashboard />
              ) : (
                <Redirect
                  to={{
                    pathname: "/signin",
                    state: { from: location },
                  }}
                />
              )
            }
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
