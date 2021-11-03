import React from "react";
import { Route, Redirect } from "react-router-dom";
import { RouteProps } from "./index";

const PublicRoutes = ({ component, ...rest }: RouteProps): JSX.Element => {
  const routeComponent = (props: any) =>
    !localStorage.authToken ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/dashboard" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default PublicRoutes;
