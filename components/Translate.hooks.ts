import React from "react";
import Request from "../utils/request";
import { log } from "../utils/lib";
import {
  getLearnLang,
  getNativeLang,
  setNativeLang as _setNativeLang,
  setLearnLang as _setLearnLang,
} from "../storage/langs";
import { ServerLanguage } from "../types";

const request = new Request();

// eslint-disable-next-line import/prefer-default-export
export const useTranslate = () => {
  const [text, setText] = React.useState<string>();
  const [translate, setTranslate] = React.useState<string>();
  const [reTranslate, setRetranslate] = React.useState<string>();
  const [nativeLang, setNativeLang] = React.useState<string>();
  const [learnLang, setLearnLang] = React.useState<string>();
  const [selecNativeLang, setSelectNativeLang] = React.useState<boolean>(false);
  const [selecLearnLang, setSelectLearnLang] = React.useState<boolean>(false);
  const [serverLanguages, setServerLanguages] = React.useState<
    ServerLanguage[]
  >([]);

  /**
   * Set langs
   */
  React.useEffect(() => {
    (async () => {
      if (!nativeLang) {
        const n = await getNativeLang();
        if (n) {
          setNativeLang(n);
        } else {
          setSelectNativeLang(true);
          return;
        }
      }

      const l = await getLearnLang();
      if (l) {
        setLearnLang(l);
      } else {
        setSelectLearnLang(true);
      }
    })();
  }, [nativeLang]);

  /**
   * Set native lang
   */
  React.useEffect(() => {
    if (!nativeLang) {
      return;
    }
    _setNativeLang(nativeLang);
  }, [nativeLang]);

  /**
   * Set learn lang
   */
  React.useEffect(() => {
    if (!learnLang) {
      return;
    }
    _setLearnLang(learnLang);
  }, [learnLang]);

  /**
   * Tranlate
   */
  React.useEffect(() => {
    if (!text || !learnLang || !nativeLang) {
      return;
    }
    const runTranslate = async (q: string) => {
      const data = await request.translate({
        q,
        source: learnLang,
        target: nativeLang,
      });

      if (data.error) {
        log("error", data.error, data, true);
        return;
      }

      log("log", "Translate result", data);
      setTranslate(data.translatedText);
    };

    const last = text[text.length - 1];
    if (/(\s|[!.?:,])/g.test(last)) {
      runTranslate(text);
    }
  }, [text, learnLang, nativeLang]);

  const changeText = (e: string) => {
    setText(e);
  };

  const getLanguages = async () => {
    const data = await request.getLanguages();
    setServerLanguages(data);
  };

  /**
   * Get languages
   */
  React.useEffect(() => {
    getLanguages();
  }, []);

  /**
   * Retranslate
   */
  React.useEffect(() => {
    if (!translate || !nativeLang || !learnLang) {
      return;
    }
    const runRetranslate = async (q: string) => {
      const data = await request.translate({
        q,
        source: nativeLang,
        target: learnLang,
      });

      if (data.error) {
        log("error", data.error, data, true);
        return;
      }

      log("log", "Re translate result", data);
      setRetranslate(data.translatedText);
    };
    runRetranslate(translate);
  }, [translate, learnLang, nativeLang]);

  return {
    translate,
    reTranslate,
    changeText,
    selecNativeLang,
    serverLanguages,
    setNativeLang,
    nativeLang,
    setSelectNativeLang,
    setSelectLearnLang,
    selecLearnLang,
    setLearnLang,
    learnLang,
  };
};
