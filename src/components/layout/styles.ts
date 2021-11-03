import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  menuItem: {
    textDecoration: "none",
    color:
      theme.palette.mode === "light" ? theme.colors.black : theme.colors.white,
  },
  title: {
    textDecoration: "none",
    color: theme.colors.white,
  },
}));
