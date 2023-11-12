import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DeviceRegistration,
  SkinTypeTest,
  SkinTypeResult,
  Cosmetics,
} from "../screens";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: theme.headerTintColor,
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeviceRegistration"
        component={DeviceRegistration}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="SkinTypeTest"
        component={SkinTypeTest}
        initialParams={{
          id: 1,
        }}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="SkinTypeResult"
        component={SkinTypeResult}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="Cosmetics"
        component={Cosmetics}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
