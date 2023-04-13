import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useLang, useTheme } from "./App.hooks";
import Loading from "./components/Loading";
import TabNavigator from "./components/TabNavigator";
import Context from "./App.context";

function App() {
  const { locale } = useLang();
  const { theme } = useTheme();

  const context = useMemo(
    () => (locale ? { locale, theme } : null),
    [locale, theme]
  );

  if (!context) {
    return <Loading />;
  }
  return (
    <Context.Provider value={context}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Context.Provider>
  );
}

export default App;
