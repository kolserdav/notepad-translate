export interface Theme {
  paper: string;
  text: string;
}

export type Themes = Record<string, Theme>;

export const themes: Themes = {
  light: {
    paper: "wheat",
    text: "black",
  },
  dark: {
    paper: "black",
    text: "wheat",
  },
};
