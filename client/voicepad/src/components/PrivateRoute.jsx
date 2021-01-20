import React from "react";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, AUTH, path, ...rest }) => {
  console.log("Private route: ", AUTH);
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) => {
        return AUTH ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
