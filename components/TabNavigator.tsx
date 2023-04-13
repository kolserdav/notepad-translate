import React, { useContext } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";

import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Translate from "../components/Translate";
import PencilIcon from "../components/icons/Pencil";
import SettingsIcon from "../components/icons/Settings";
import Loading from "../components/Loading";
import Settings from "../components/Settings";
import ChangeTheme from "../components/ChangeTheme";
import { Locale } from "../types";
import { Theme } from "../Theme";
import Context from "../App.context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { theme, locale } = useContext(Context);

  const navigator = useNavigation();

  // console.log(navigator.getId());

  const options: BottomTabNavigationOptions = {
    tabBarActiveBackgroundColor: theme.paper,
    tabBarInactiveBackgroundColor: theme.paper,
    tabBarLabelStyle: { color: theme.text },
    headerStyle: { backgroundColor: theme.active },
    headerTintColor: theme.text,
  };

  return (
    <Tab.Navigator initialRouteName="Translate">
      <Tab.Screen
        name="Translate"
        component={Translate}
        options={{
          title: locale?.translate,
          tabBarIcon: PencilIcon,
          ...options,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: locale?.settings,
          tabBarIcon: SettingsIcon,
          ...options,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
