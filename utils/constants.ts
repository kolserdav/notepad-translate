import { REACT_APP_TRANSLATE_URL, REACT_APP_API_URL } from "@env";
import { Themes } from "../Theme";

export const NODE_ENV = process.env.NODE_ENV as string;

export const TRANSLATE_URL = REACT_APP_TRANSLATE_URL;

export const API_URL = REACT_APP_API_URL;

export const LOADING_TIMEOUT = 10000;

export const DEFAULT_THEME: keyof Themes = "light";

export const THEME_BUTTON_SIZE = 24;

export const THEME_BUTTON_SIZE_ACTIVE = 32;
