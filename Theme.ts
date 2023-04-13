export interface Theme {
  paper: string;
  active: string;
  text: string;
}

export type Themes = Record<string, Theme>;

export const themes: Themes = {
  light: {
    paper: "#e1fcfd",
    active: "#e5b9a8",
    text: "#394f8a",
  },
  dark: {
    paper: "#150734",
    active: "#0f2557",
    text: "#7ed5ea",
  },
  gray: {
    paper: "black",
    active: "gray",
    text: "white",
  },
};
