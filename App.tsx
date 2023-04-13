import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Translate from "./components/Translate";
import PencilIcon from "./components/icons/Pencil";
import { useApp } from "./App.hooks";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TranslateIcon() {
  return <PencilIcon color="blue" size={24} />;
}

function App() {
  useApp();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Translate">
        <Tab.Screen
          name="Translate"
          component={Translate}
          options={{
            title: "Translate",
            tabBarIcon: TranslateIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
