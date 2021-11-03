import React from "react";
import SignupContainer from "../../containers/signup";
import Head from "../../components/head";

const Signup = (): JSX.Element => {
  return (
    <>
      <Head title="Signup" description="get started with demo app" />
      <SignupContainer />
    </>
  );
};

export default Signup;
