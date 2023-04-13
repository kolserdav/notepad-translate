export interface Theme {
  paper: string;
  active: string;
  inactive: string;
  text: string;
}

export type Themes = Record<string, Theme>;

export const themes: Themes = {
  light: {
    paper: "wheat",
    active: "yellow",
    inactive: "orange",
    text: "black",
  },
  dark: {
    paper: "black",
    active: "red",
    inactive: "orange",
    text: "wheat",
  },
};
