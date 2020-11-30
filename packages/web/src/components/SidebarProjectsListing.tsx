import * as React from "react";
import request from "../utilities/request";

interface SidebarProjectsListingProps {
  show: boolean;
}

type Project = {
  name: string;
  id: number;
};
const SidebarProjectsListing: React.FC<SidebarProjectsListingProps> = ({
  show,
}) => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    request("api/projects").then(({ data: { projects } }) => {
      console.log(projects);

      setProjects(projects);
    });
  }, []);

  return (
    <nav>
      <ul className={`Projects-sidebar-listing ${show ? "active" : ""}`}>
        <li>Project 1</li>
        <li>Project 2</li>
        {projects.map((p) => (
          <li>{p.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarProjectsListing;
