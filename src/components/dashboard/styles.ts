import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: 200,
    zIndex: 0,
    boxShadow: "none",
    textAlign: "center",
    padding: "40px 0px",
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "16px",
    marginBottom: "30px",
  },
  footer: {
    fontWeight: 600,
    lineHeight: 2,
    fontSize: "14px",
    fontFamily: "Roboto",
  },
  heading: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "24px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));
