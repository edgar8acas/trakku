import * as React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type DashboardNavProps = {
  className?: string;
};
export const DashboardNav: React.FC<DashboardNavProps> = ({
  children,
  className = "",
}) => {
  return (
    <nav className={`Dashboard-Nav ${className}`}>
      <ul className="nav">{children}</ul>
    </nav>
  );
};

export const SidebarNavItem: React.FC<NavLinkProps> = (props) => {
  return (
    <li className={["Nav-item"].join(" ")}>
      <NavLink {...props} />
    </li>
  );
};
