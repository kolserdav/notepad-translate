import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME = "@theme";

export const getTheme = () => AsyncStorage.getItem(THEME);

export const setTheme = (value: string) => {
  AsyncStorage.setItem(THEME, value);
};
