import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";
import Head from "../../components/head";

const NotFound = (): JSX.Element => {
  const classes = useStyles();
  const [translate] = useTranslation("translations");
  return (
    <Grid container component={Paper} className={classes.root}>
      <Head title="Not Found" description="Page not found" />

      <Grid item xs={12} sm={8} md={5} component="main">
        <div className={classes.paper}>
          <Typography component="h1" variant="h1">
            404
          </Typography>
          <Typography component="h1" variant="h1">
            {translate("notFound.title")}
          </Typography>
          <Link to="/"> {translate("notFound.linkText")}</Link>
        </div>
      </Grid>
    </Grid>
  );
};
export default NotFound;
