import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import englishTranslation from "./translations/en.json";
import frenchTranslation from "./translations/fr.json";
import { ColorModeContext } from "./utils/context";
import { themes } from "./utils/theme";
import AppRouter from "./routes";
import { useAppSelector } from "./hooks/reduxHooks";
import { selectLocale } from "./redux/reducers/settings";
import { store, persistor } from "./redux/store";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translations: englishTranslation,
    },
    fr: {
      translations: frenchTranslation,
    },
  },
});

const AppWrapper = (): JSX.Element => {
  const language = useAppSelector(selectLocale);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <I18nextProvider i18n={i18next}>
      <AppRouter />
    </I18nextProvider>
  );
};

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(themes[0]);
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    setTheme(mode === "light" ? themes[0] : themes[1]);
  }, [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <HelmetProvider>
              <AppWrapper />
            </HelmetProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
