import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { UserProvider } from "./contexts/User";
import { SplashScreen } from "expo";
import AppLoading from "expo-app-loading";
import { theme } from "./theme";
import Navigation from "./navigations";
import * as Font from "expo-font";
import { fonts } from "../assets/fonts";
import { LogBox } from "react-native";

const App = () => {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync(fonts);
      setIsReady(true);
    } catch (error) {
      console.error("Error loading custom fonts:", error);
    }
  };

  useEffect(() => {
    async function initializeApp() {
      await loadFonts();
      SplashScreen.hideAsync();
    }

    initializeApp();
  }, []);

  if (!isReady) {
    return null;
  }

  return isReady ? (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </UserProvider>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
};

export default App;
