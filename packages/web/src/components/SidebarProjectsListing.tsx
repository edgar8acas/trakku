import * as React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Project } from "../typings";
import request from "../utilities/request";
import { DashboardNav, NavItem } from "./DashboardNav";

interface SidebarProjectsListingProps {
  show: boolean;
}

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

  if (!show) return null;
  return (
    <DashboardNav className="Projects-sidebar-listing">
      {projects.map((project) => (
        <NavItem
          key={project.id}
          component={
            <NavLink to={`${path}/projects/${project.id}`}>
              {project.name}
            </NavLink>
          }
        />
      ))}
    </DashboardNav>
  );
};

export default SidebarProjectsListing;
