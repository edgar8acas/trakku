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
  link: React.ReactNode;
  onClick?: () => void;
};

export const NavItem: React.FC<NavItemProps> = ({ link, onClick }) => {
  return (
    <li className="Nav-item" onClick={onClick}>
      {link}
    </li>
  );
};
