import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="nav">
        <li>
          <Link to="/signin" className="Navigation--register">
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
