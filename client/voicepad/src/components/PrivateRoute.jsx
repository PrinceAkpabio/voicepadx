import React from "react";

import { Redirect, Route, Render } from "react-router-dom";

const PrivateRoute = ({ children, Auth, ...rest }) => {
  console.log("Private Route", Auth);
  return (
    <Route
      {...rest}
      render={() => {
        return Auth.accessToken ? (
          <Redirect to={`/profile/${Auth.username}`}>children</Redirect>
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
