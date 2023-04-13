import React from "react";
import { themes } from "./Theme";
import { DEFAULT_THEME } from "./utils/constants";
import { Locale } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const locale: Locale = {} as any;

const Context = React.createContext({
  theme: themes[DEFAULT_THEME],
  locale,
});

export default Context;
