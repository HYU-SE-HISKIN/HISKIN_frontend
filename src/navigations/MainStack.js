import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DeviceRegistration,
  SkinTypeTest,
  SkinTypeResult,
  Cosmetics,
  SkinReport,
} from "../screens";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: "flex-start",
        headerTintColor: theme.black,
        headerStyle: {
          backgroundColor: theme.ivory_0,
          shadowColor: theme.ivory_0,
        },
        headerTitleStyle: {
          fontFamily: "LG Smart - Bold Italic",
          fontSize: 18,
        },
        cardStyle: { backgroundColor: theme.ivory_0 },
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
        options={{
          headerBackTitleVisible: false,
          title: "새로운 디바이스 등록",
        }}
      />
      <Stack.Screen
        name="SkinTypeTest"
        component={SkinTypeTest}
        initialParams={{
          id: 1,
        }}
        options={{ headerBackTitleVisible: false, title: "피부 유형 진단" }}
      />
      <Stack.Screen
        name="SkinTypeResult"
        component={SkinTypeResult}
        options={{ headerBackTitleVisible: false, title: "피부 유형 진단" }}
      />
      <Stack.Screen
        name="Cosmetics"
        component={Cosmetics}
        options={{ headerBackTitleVisible: false, title: "화장품 추천" }}
      />
      <Stack.Screen
        name="SkinReport"
        component={SkinReport}
        options={{ headerBackTitleVisible: false, title: "피부 리포트" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
