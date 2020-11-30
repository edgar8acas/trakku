import { useParams } from "react-router-dom";
import * as React from "react";
interface ParamTypes {
  id: string;
}

const ProjectDetails: React.FC<{}> = () => {
  const { id } = useParams<ParamTypes>();
  return (
    <div>
      <h2>Project details</h2> <h4 style={{ fontFamily: "monospace" }}>{id}</h4>
    </div>
  );
};

export default ProjectDetails;
