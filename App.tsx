import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { StyleSheet, View, AppRegistry, Platform, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Translate from "./components/Translate";
import PencilIcon from "./components/icons/Pencil";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Translate}
          options={{
            title: "Welcome",
            tabBarIcon: () => <PencilIcon color="blue" size={24} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wheat",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
});

export default App;
