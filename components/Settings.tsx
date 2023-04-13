import React from "react";
import { Text, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { Locale } from "../types";
import { useTheme } from "./Settings.hooks";

interface SettingsProps extends BottomTabScreenProps<ParamListBase> {
  locale: Locale;
}

function Settings({ locale }: SettingsProps) {
  useTheme();
  return (
    <View>
      <Text>{locale.settings}</Text>
    </View>
  );
}

export default Settings;
