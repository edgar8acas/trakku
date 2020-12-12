import * as React from "react";

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

type NavItemProps = {
  component: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
};

export const NavItem: React.FC<NavItemProps> = ({
  component,
  onClick,
  isSelected = false,
}) => {
  const selected = isSelected ? "Nav-item--selected" : null;
  return (
    <li className={["Nav-item", selected].join(" ")} onClick={onClick}>
      {component}
    </li>
  );
};
