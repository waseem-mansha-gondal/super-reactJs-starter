import React from "react";
import Header from "../../components/layout/header";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
