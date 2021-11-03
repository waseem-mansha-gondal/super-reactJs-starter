import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { useStyles } from "./styles";
import Paper from "@mui/material/Paper";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { UserProps } from "../../interfaces";
import "./index.css";

interface ProfileProps {
  user: UserProps | null;
}

const Profile = ({ user }: ProfileProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item xs={11} sm={12} md={12} component="main">
        <Grid container justifyContent="center">
          <Grid className={classes.card}>
            <Grid className={classes.textCenter}>
              <img
                src="https://i.imgur.com/stD0Q19.jpg"
                alt="profile.jpg"
                width="100"
                className={classes.roundedCircle}
              />
              <Typography variant="h3">
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography component="span">Android Developer</Typography>

              <Grid container className={classes.mt40}>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Typography variant="h5">Projects </Typography>
                  <Typography component="span">10</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Typography variant="h5">Followers </Typography>
                  <Typography component="span">10,000</Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Typography variant="h5">Ranks </Typography>
                  <Typography component="span">123</Typography>
                </Grid>
              </Grid>
              <hr className="line" />
              <Typography component="small" className="mt-4">
                I am an android developer working at google Inc at california,
                USA
              </Typography>

              <Grid container justifyContent="center" className={classes.mt40}>
                {" "}
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon />
                </IconButton>{" "}
                <IconButton className={classes.socialIcon}>
                  <LinkedInIcon />
                </IconButton>{" "}
                <IconButton className={classes.socialIcon}>
                  <GoogleIcon />
                </IconButton>{" "}
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon />
                </IconButton>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Profile;
