import React from "react";
import { Grid } from "@mui/material";
import ProfileContainer from "../../containers/profile";
import Head from "../../components/head";

const Profile: React.FC = (): JSX.Element => {
  return (
    <Grid container className="App">
      <Head title="Profile" description="Check your Profile" />
      <ProfileContainer />
    </Grid>
  );
};

export default Profile;
