import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { selectAuth } from "../slices/auth";

export interface PrivateRouteProps extends RouteProps {
  component: any;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useSelector(selectAuth);

  return (
    <Route
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
      {...rest}
    />
  );
};
