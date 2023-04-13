import React from "react";
import Request from "./utils/request";
import { getAppLocale } from "./utils/lib";
import { Locale } from "./types";
import { DEFAULT_THEME } from "./utils/constants";
import { getTheme, setTheme as _setTheme } from "./storage/theme";
import { themes } from "./Theme";

const request = new Request();

export const useLang = () => {
  const [locale, setLocale] = React.useState<Locale>();

  React.useEffect(() => {
    const _locale = getAppLocale();
    const runGetLocale = async () => {
      const lang = await request.getLocale(_locale);
      setLocale(lang);
    };
    runGetLocale();
  }, []);

  return { locale };
};

export const useTheme = () => {
  const [theme, setTheme] = React.useState<typeof DEFAULT_THEME>(DEFAULT_THEME);

  /**
   * Set theme after load
   */
  React.useEffect(() => {
    (async () => {
      const t = await getTheme();
      if (t) {
        setTheme(t);
      }
    })();
  }, []);

  /**
   * Change theme
   */
  React.useEffect(() => {
    _setTheme(theme);
  }, [theme]);

  return { theme: themes[theme], setTheme };
};
