import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Card from "../../components/dashboard/card";
import Chart from "../../components/dashboard/chart";
import { useStyles } from "./styles";

const DashboardContainer = (): JSX.Element => {
  const classes = useStyles();
  const [translation] = useTranslation("translations");

  const data = [
    { title: translation("dashboard.users"), count: 2340 },
    { title: translation("dashboard.sales"), count: 2340 },
    { title: translation("dashboard.products"), count: 23 },
    { title: translation("dashboard.income"), count: "$4500" },
  ];
  return (
    <>
      <Grid item xs={12} className={classes.items}>
        <Chart />
      </Grid>
      {data.map((item, index) => {
        return (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            className={classes.items}
          >
            <Card data={item} />
          </Grid>
        );
      })}
    </>
  );
};

export default DashboardContainer;
