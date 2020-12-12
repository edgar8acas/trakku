import * as React from "react";
import { matchPath, NavLink, useParams, useRouteMatch } from "react-router-dom";
import { Project } from "../typings";
import request from "../utilities/request";
import { DashboardNav, NavItem } from "./DashboardNav";

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
        <NavItem
          key={project.id}
          isSelected={matched?.params.id === project.id}
          component={
            <NavLink to={`/dashboard/projects/${project.id}`}>
              {project.name}
            </NavLink>
          }
        />
      ))}
    </DashboardNav>
  );
};

export default SidebarProjectsListing;
