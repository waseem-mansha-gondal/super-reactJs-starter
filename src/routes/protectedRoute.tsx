import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../containers/layout";
import { RouteProps } from "./index";

const ProtectedRoute = ({ component, ...rest }: RouteProps): JSX.Element => {
  const routeComponent = (props: any) =>
    localStorage.authToken ? (
      <Layout>{React.createElement(component, props)}</Layout>
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default ProtectedRoute;
