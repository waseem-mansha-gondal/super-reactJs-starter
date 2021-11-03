import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "91vh",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  roundedCircle: {
    borderRadius: "50%",
  },
  textCenter: {
    textAlign: "center",
  },
  card: {
    color:
      theme.palette.mode === "light" ? theme.colors.black : theme.colors.white,
    borderRadius: "10px",
    boxShadow: `1px 1px 5px  ${theme.palette.primary.light}, -1px -1px 5px ${theme.palette.primary.light}`,
    border: "none",
    padding: "30px",
  },
  mt40: {
    marginTop: "40px",
  },
  socialIcon: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: " 0 !important",
    cursor: " pointer",
    color: theme.colors.white,
    fontSize: " 15px",
    border: " none",
    marginRight: " 10px",
    borderRadius: " 50%",
    background: `linear-gradient(145deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    boxShadow: `inset 20px 20px 60px ${theme.palette.primary.light}, inset -20px -20px 60px ${theme.palette.primary.main}`,
  },
}));
