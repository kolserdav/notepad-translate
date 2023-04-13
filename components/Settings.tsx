import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSettings } from "./Settings.hooks";
import Context from "../App.context";
import ChangeTheme from "./ChangeTheme";

const Stack = createNativeStackNavigator();

function Settings(_: BottomTabScreenProps<ParamListBase>) {
  const { theme, locale } = useContext(Context);
  useSettings();
  return (
    <View
      style={{
        backgroundColor: theme.paper,
        height: "100%",
      }}
    >
      <View
        style={{
          borderColor: theme.text,
          borderWidth: 1,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={[{ color: theme.text }, styles.item]}>
          {locale.change_theme}
        </Text>
        <ChangeTheme paper={theme.paper} />
      </View>
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
