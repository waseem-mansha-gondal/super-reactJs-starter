import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Reef from "../assets/fonts/reef/Reef.otf";
import Roboto from "../assets/fonts/roboto/Roboto-Regular.ttf";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      black: string;
      white: string;
    };
    fontFamily: {
      Roboto: string;
      Reef: string;
    };
  }
}

const allThemes: Array<PaletteMode> = ["light", "dark"];
export const themes = allThemes.map((mode: PaletteMode) => {
  return createTheme(
    {
      palette: {
        mode,
        primary: {
          light: mode !== "light" ? "rgb(24,119,242)" : "rgb(45,136,255)",
          main: mode === "light" ? "rgb(24,119,242)" : "rgb(45,136,255)",
          contrastText: "#fff",
        },
        secondary: {
          light: mode !== "light" ? "rgb(24,119,242)" : "#C8FACD",
          main: "#C8FACD",
          contrastText: mode === "light" ? "#005249" : "#fff",
        },
        background: {
          default: mode === "light" ? "#fff" : "rgb(24,25,26)",
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Reef';
              src: url(${Reef}) format('opentype');
            }
            @font-face {
              font-family: 'Roboto';
              src: url(${Roboto}) format('TrueType');
            }
          `,
        },
      },
      typography: {
        fontFamily: ["Reef", "Roboto"].join(","),
      },
    },
    {
      fontFamily: {
        Roboto: "Roboto",
        Reef: "Reef",
      },
      colors: {
        black: "#000",
        white: "#fff",
      },
      typography: {
        h1: { fontSize: "2em" },
        h2: { fontSize: "1.5em" },
        h3: { fontSize: "1.3em" },
        h5: { fontSize: "0.8em" },
        h6: { fontSize: "0.7em" },
        button: {
          textTransform: "none",
          background: mode === "light" ? "#fff" : "#rgb(45,136,255)",
          color: mode === "light" ? "#000" : "#fff",
        },
      },
    }
  );
});
