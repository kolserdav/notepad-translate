import React from "react";
import { Text, View, Button } from "react-native";
import { themes } from "../Theme";
import {
  THEME_BUTTON_SIZE,
  THEME_BUTTON_SIZE_ACTIVE,
} from "../utils/constants";
import storeTheme, { changeTheme } from "../store/theme";

function ChangeTheme({ paper }: { paper: string }) {
  const changeThemeWrapper = (key: string) => () => {
    storeTheme.dispatch(changeTheme({ theme: key }));
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {Object.keys(themes).map((key) => (
        <View
          key={key}
          style={{
            margin: 12,
            width:
              themes[key].paper !== paper
                ? THEME_BUTTON_SIZE
                : THEME_BUTTON_SIZE_ACTIVE,
            height:
              themes[key].paper !== paper
                ? THEME_BUTTON_SIZE
                : THEME_BUTTON_SIZE_ACTIVE,
          }}
        >
          <Button
            title=""
            color={themes[key].active}
            onPress={changeThemeWrapper(key)}
          />
        </View>
      ))}
    </View>
  );
}

export default ChangeTheme;
