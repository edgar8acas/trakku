import { useParams } from "react-router-dom";
import * as React from "react";
import request from "../utilities/request";
import { ParamTypes, Project } from "../typings";
import InviteUserForm from "./InviteUserForm";
import { BacklogBoard } from "./Backlog/BacklogBoard";

const ProjectDetails: React.FC<{}> = () => {
  const { id } = useParams<ParamTypes>();
  const [project, setProject] = React.useState<Project>({ id: "", name: "" });

  React.useEffect(() => {
    request(`api/projects/${id}`).then(({ data: { project } }) => {
      setProject((prev) => ({ ...prev, ...project }));
    });
  }, [id]);

  return (
    <>
      <h1 className="Project-title">{project.name}</h1>
      <BacklogBoard />
      <InviteUserForm />
    </>
  );
};

export default ProjectDetails;
