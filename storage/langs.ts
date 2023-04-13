import AsyncStorage from "@react-native-async-storage/async-storage";

const LEARN_LANG = "@learn_lang";
const NATIVE_LANG = "@native_lang";

export const getNativeLang = () => AsyncStorage.getItem(NATIVE_LANG);

export const removeNativeLang = () => AsyncStorage.removeItem(NATIVE_LANG);

export const setNativeLang = (value: string) => {
  AsyncStorage.setItem(NATIVE_LANG, value);
};

export const getLearnLang = () => AsyncStorage.getItem(LEARN_LANG);

export const setLearnLang = (value: string) => {
  AsyncStorage.setItem(LEARN_LANG, value);
};
