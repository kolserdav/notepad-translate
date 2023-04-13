import React from "react";
import Request from "../utils/request";
import { log } from "../utils/lib";

const request = new Request();

// eslint-disable-next-line import/prefer-default-export
export const useTranslate = () => {
  const [text, setText] = React.useState<string>();
  const [translate, setTranslate] = React.useState<string>();
  const [reTranslate, setRetranslate] = React.useState<string>();
  const [nativeLang, setNativeLang] = React.useState<string>("ru");
  const [learnLang, setLearnLAng] = React.useState<string>("en");

  /**
   * Tranlate
   */
  React.useEffect(() => {
    if (!text) {
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
    // console.log(data);
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
    if (!translate) {
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

  return { translate, reTranslate, changeText };
};
