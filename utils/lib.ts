import { NativeModules, Platform } from "react-native";

export const log = (
  level: "log" | "info" | "warn" | "error",
  message: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  forUser = false
) => {
  // eslint-disable-next-line no-console
  console[level](level, message, data);
};

export const getAppLocale = () =>
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;
