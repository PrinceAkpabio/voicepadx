import React from "react";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, path, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const AUTH = user.accessToken;
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
