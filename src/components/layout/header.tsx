import { Grid, Typography } from "@mui/material";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import LanguagePopover from "../../components/menuPopover/languagePopover";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { changeLocale } from "../../redux/reducers/settings";
import { ColorModeContext } from "../../utils/context";
import { useStyles } from "./styles";

const Header = (): JSX.Element => {
  const history = useHistory();
  const theme = useTheme();
  const classes = useStyles(theme);
  const dispatch = useAppDispatch();
  const [translation] = useTranslation("translations");
  const colorMode = React.useContext(ColorModeContext);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event: any) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    dispatch(changeLocale(lang));
  };

  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className={classes.title}>
              {translation("nav.title")}
            </Link>
          </Typography>

          <Typography sx={{ textTransform: "capitalize" }}>
            {theme.palette.mode} {translation("nav.mode")}
          </Typography>

          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          <LanguagePopover handleLanguageChange={handleLanguageChange} />

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link
                  to="/profile"
                  className={classes.menuItem}
                  onClick={handleClose}
                >
                  <MenuItem>
                    <Typography>
                      {translation("nav.dropdown.profile")}
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>
                  {" "}
                  {translation("logout")}
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
