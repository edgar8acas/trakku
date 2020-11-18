import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  navigation: JSX.Element;
  logo?: JSX.Element;
}

function Header({ navigation, logo }: HeaderProps) {
  return (
    <div className="Header">
      <div className="Header__wrapper central-wrapper">
        {logo || <div>My logo</div>}
        {navigation}
        <Link to="/signup" className="button Header__register">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Header;
