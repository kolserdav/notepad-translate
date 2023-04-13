import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { ParamListBase } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useTranslate } from "./Translate.hooks";

export default function Translate({
  navigation,
}: BottomTabScreenProps<ParamListBase>) {
  const { changeText, translate, reTranslate } = useTranslate();

  return (
    <View style={styles.container}>
      <TextInput onChangeText={changeText} style={styles.input} />
      <Text style={styles.text}>{translate}</Text>
      <Text style={styles.reTranslate}>{reTranslate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    fontSize: 16,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  reTranslate: {
    fontSize: 16,
    margin: 10,
    fontWeight: "700",
  },
});
