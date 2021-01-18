import React from "react";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, path, Auth, ...rest }) => {
  console.log("Private Route", Auth);
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) => {
        return Auth ? (
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
