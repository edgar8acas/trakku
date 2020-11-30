import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import Projects from "../components/Projects";
import SidebarProjectsListing from "../components/SidebarProjectsListing";
import { logout } from "../slices/auth";

function Dashboard() {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();
  const [showProjects, setShowProjects] = useState(false);
  return (
    <div className="Dashboard">
      <div className="Sidebar">
        <h1>Logo</h1>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <nav>
          <ul>
            <li>
              <NavLink to={`${url}/projects`}>Projects</NavLink>
              <button onClick={() => setShowProjects((prev) => !prev)}>
                Show projects
              </button>
              <SidebarProjectsListing show={showProjects} />
            </li>
          </ul>
        </nav>
      </div>
      <section className="Main">
        <header className="Main-header">
          <h2>Dashboard</h2>
          <a href="#a">Where</a> / <a href="#b">am</a> / <a href="#c">I</a> /
        </header>
        <section className="Main-container">
          <Switch>
            <Route exact path={path}>
              Dashboard
            </Route>
            <Route path={`${path}/projects`} component={Projects}></Route>
          </Switch>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
