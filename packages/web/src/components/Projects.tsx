import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Button } from "./Controls/Button";
import { Modal } from "./Modal";
import ProjectDetails from "./ProjectDetails";
import { ProjectForm } from "./ProjectForm";

function Projects() {
  const { path } = useRouteMatch();
  const [createProjectModal, setCreateProjectModal] = useState(false);
  return (
    <div className="Projects">
      <Switch>
        <Route exact path="/dashboard/projects">
          <Button
            label="New project"
            onClick={() => setCreateProjectModal(!createProjectModal)}
          />
          <Modal
            active={createProjectModal}
            onClose={() => setCreateProjectModal(false)}
            title="New project"
            render={(onClose) => <ProjectForm onCancel={onClose} />}
          ></Modal>
        </Route>
        <Route exact path={`${path}/:id`} component={ProjectDetails}></Route>
      </Switch>
    </div>
  );
}

export default Projects;
