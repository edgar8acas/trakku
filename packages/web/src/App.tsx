import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./layouts/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login"></Route>
          <Route path="/register"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
