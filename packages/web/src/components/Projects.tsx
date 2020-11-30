import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import ProjectForm from "./ProjectForm";

function Projects() {
  const { path } = useRouteMatch();
  return (
    <div className="Projects">
      <Switch>
        <Route exact path="/dashboard/projects" component={ProjectForm} />
        <Route exact path={`${path}/:id`} component={ProjectDetails}></Route>
      </Switch>
    </div>
  );
}

export default Projects;
