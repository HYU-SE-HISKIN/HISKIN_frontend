import React, {useState, useEffect} from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import AppLoading from 'expo-app-loading';
import { theme } from "./theme";
import Navigation from "./navigations";
import * as Font from 'expo-font';
import { fonts } from '../assets/fonts';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync(fonts);
      setIsReady(true);
    } catch (error) {
      console.error('Error loading custom fonts:', error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []); 
  
    return isReady ? (
  <ThemeProvider theme={theme}>
    <StatusBar barStyle="dark-content" />
    <Navigation />
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
