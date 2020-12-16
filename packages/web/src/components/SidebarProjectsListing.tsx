import * as React from "react";
import { matchPath } from "react-router-dom";
import { Project } from "../typings";
import request from "../utilities/request";
import { DashboardNav, SidebarNavItem } from "./DashboardNav";

interface SidebarProjectsListingProps {
  show: boolean;
  location: any;
}

interface MatchParams {
  id: string;
}

const SidebarProjectsListing: React.FC<SidebarProjectsListingProps> = ({
  show,
  location,
}) => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  const matched = matchPath<MatchParams>(location.pathname, {
    path: "/dashboard/projects/:id",
  });

  React.useEffect(() => {
    request("api/projects").then(({ data: { projects } }) => {
      setProjects(projects);
    });
  }, []);

  if (!show) return null;
  return (
    <DashboardNav className="Projects-sidebar-listing">
      {projects.map((project) => (
        <SidebarNavItem
          key={project.id}
          to={`/dashboard/projects/${project.id}`}
          activeClassName="Nav-item--selected"
        >
          {project.name}
        </SidebarNavItem>
      ))}
    </DashboardNav>
  );
};

export default SidebarProjectsListing;
