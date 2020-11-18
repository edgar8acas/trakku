import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import Dashboard from "./layouts/Dashboard";
import Home from "./layouts/Home";
import Login from "./layouts/Login";

function App() {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <div>Sign up</div>
          </Route>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
