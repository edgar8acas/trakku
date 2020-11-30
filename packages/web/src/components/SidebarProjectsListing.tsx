import * as React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
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
  const { path } = useRouteMatch();

  React.useEffect(() => {
    request("api/projects").then(({ data: { projects } }) => {
      setProjects(projects);
    });
  }, []);

  return (
    <nav>
      <ul className={`Projects-sidebar-listing ${show ? "active" : ""}`}>
        {projects.map((p) => (
          <li>
            <NavLink to={`${path}/projects/${p.id}`}>{p.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarProjectsListing;
