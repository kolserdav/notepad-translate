import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { log } from "./utils/lib";

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
    const res = await fetch("http://192.168.0.3:5000/translate", {
      method: "POST",
      body: JSON.stringify({
        q,
        source: "ru",
        target: "en",
        format: "text",
        api_key: "44c748aa-0854-41cb-9b5f-c274f750ea2a",
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = (await res.json()) as any;

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
