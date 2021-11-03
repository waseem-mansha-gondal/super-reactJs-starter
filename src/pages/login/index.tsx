import React from "react";
import LoginContainer from "../../containers/login";
import Head from "../../components/head";

const Login = (): JSX.Element => {
  return (
    <>
      <Head title="Login" description="Login to demo app" />
      <LoginContainer />
    </>
  );
};

export default Login;
