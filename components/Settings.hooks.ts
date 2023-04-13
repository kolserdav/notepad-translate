import React from "react";
import { getTheme, setTheme as _setTheme } from "../storage/theme";
import { DEFAULT_THEME } from "../utils/constants";

// eslint-disable-next-line import/prefer-default-export
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

  return { theme, setTheme };
};
