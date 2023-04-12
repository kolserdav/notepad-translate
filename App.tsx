import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { log } from "./utils/lib";
import { TRANSLATE_URL } from "./utils/constants";
import request from "./utils/request";

export default function App() {
  const [text, setText] = React.useState<string>();
  const [translate, setTranslate] = React.useState<string>();

  React.useEffect(() => {
    if (!text) {
      return;
    }

    const last = text[text.length - 1];
    if (/(\s|[!.?:,])/g.test(last)) {
      runTranslate(text);
    }
  }, [text]);

  const runTranslate = async (q: string) => {
    const data = await request.translate({ q, source: "ru", target: "en" });

    const d = data.translatedText;
    if (!d) {
      log("error", "Error translate", data, true);
      return;
    }
    log("log", "Translate result", data);
    setTranslate(d);
  };

  const changeText = (e: string) => {
    setText(e);
  };

  const getLanguages = async () => {
    const data = await request.getLanguages();
    console.log(data);
  };

  React.useEffect(() => {
    getLanguages();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput onChangeText={changeText} style={styles.input} />
      <Text>{translate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },
});
