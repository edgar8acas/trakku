import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <Link to="/login" className="Navigation--register">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
