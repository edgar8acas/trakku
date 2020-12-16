import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { DashboardNav, SidebarNavItem } from "../components/DashboardNav";
import Projects from "../components/Projects";
import SidebarProjectsListing from "../components/SidebarProjectsListing";
import { logout } from "../slices/auth";
import Logo from "../assets/Logo";

function Dashboard() {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();
  const [showProjects, setShowProjects] = useState(false);
  return (
    <div className="Dashboard">
      <div className="Dashboard-header">
        <div className="Logo-wrapper">
          <Logo />
        </div>
        <div className="Dashboard-header-navbar"></div>
      </div>
      <div className="Sidebar">
        <DashboardNav>
          <SidebarNavItem
            to="/dashboard"
            exact
            activeClassName="Nav-item--selected"
          >
            Dashboard
          </SidebarNavItem>

          <SidebarNavItem
            to={`${url}/projects`}
            activeClassName="Nav-item--selected"
            onClick={() => setShowProjects(!showProjects)}
            exact
          >
            Projects
          </SidebarNavItem>
          <Switch>
            <Route
              path={`${path}/projects`}
              render={({ location }) => (
                <SidebarProjectsListing
                  location={location}
                  show={showProjects}
                />
              )}
            />
          </Switch>

          <SidebarNavItem
            to={`${url}/issues`}
            activeClassName="Nav-item--selected"
          >
            Issues
          </SidebarNavItem>
        </DashboardNav>
        <button onClick={() => dispatch(logout())} className="Sidebar-Logout">
          Logout
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
      <section className="Main">
        <header className="Main-header">
          <h2>Dashboard</h2>
          <a href="#a">Where</a> / <a href="#b">am</a> / <a href="#c">I</a> /
        </header>
        <section className="Main-container">
          <Switch>
            <Route exact path={path}>
              <span>Dashboard {JSON.stringify(path)}</span>
            </Route>
            <Route path={`${path}/projects`} component={Projects}></Route>
          </Switch>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
