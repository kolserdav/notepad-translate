import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import Translate from "./components/Translate";
import PencilIcon from "./components/icons/Pencil";
import { useLang, useTheme } from "./App.hooks";
import SettingsIcon from "./components/icons/Settings";
import Loading from "./components/Loading";
import Settings from "./components/Settings";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  const { locale } = useLang();
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Translate">
        <Tab.Screen
          name="Translate"
          component={
            locale
              ? (props: BottomTabScreenProps<ParamListBase>) => (
                  <Translate {...props} locale={locale} theme={theme} />
                )
              : Loading
          }
          options={{
            title: locale?.translate,
            tabBarIcon: PencilIcon,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={
            locale
              ? (props: BottomTabScreenProps<ParamListBase>) => (
                  <Settings {...props} locale={locale} />
                )
              : Loading
          }
          options={{
            title: locale?.settings,
            tabBarIcon: SettingsIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
