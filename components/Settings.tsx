import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { Locale } from "../types";
import { useTheme } from "./Settings.hooks";
import storeTheme, { changeTheme } from "../store/theme";
import { Theme } from "../Theme";

interface SettingsProps extends BottomTabScreenProps<ParamListBase> {
  locale: Locale;
  theme: Theme;
}

function Settings({ locale, theme }: SettingsProps) {
  useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.paper,
        height: "100%",
      }}
    >
      <Text style={[{ color: theme.text }, styles.item]}>
        {locale.settings}
      </Text>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  item: {
    margin: 20,
    fontSize: 20,
  },
});
