import React from "react";
import { Helmet } from "react-helmet-async";

interface HeadProps {
  title?: string;
  description?: string;
}

const Head = ({ title, description }: HeadProps): JSX.Element => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Demo App {title && ` | ${title}`}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : "Starter Template For React Redux with Typescript and MUI"
        }
      />
      <link rel="icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="logo192.png" />
    </Helmet>
  );
};
export default Head;
