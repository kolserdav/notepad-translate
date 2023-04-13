import React from "react";
import Request from "./utils/request";
import { getAppLocale } from "./utils/lib";

const request = new Request();

// eslint-disable-next-line import/prefer-default-export
export const useApp = () => {
  React.useEffect(() => {
    const locale = getAppLocale();
    const runGetLocale = async () => {
      const lang = await request.getLocale(locale);
      console.log(lang);
    };
    runGetLocale();
  }, []);
};
