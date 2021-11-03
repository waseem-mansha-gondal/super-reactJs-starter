import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import DashboardContainer from "../../containers/dashboard";
import { useStyles } from "./styles";
import Head from "../../components/head";

const Dashboard = (): JSX.Element => {
  const classes = useStyles();
  const [translation] = useTranslation("translations");

  return (
    <Grid container spacing={3} className={classes.container}>
      <Head title="Dashboard" description="Demo App dashboard" />
      <Grid item xs={12} className={classes.item}>
        <Typography variant="h4">{translation("dashboard.title")}</Typography>
      </Grid>
      <DashboardContainer />
    </Grid>
  );
};

export default Dashboard;
