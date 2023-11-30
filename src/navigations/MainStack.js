import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DeviceRegistration,
  Challenge,
  Care,
  SkinTypeTest,
  SkinTypeResult,
  Cosmetics,
  SkinReport,
  CareDetails,
  InteractiveCare,
  FacialAnalysis,
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
          fontFamily: "LG Smart - Bold",
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
        name="Challenge"
        component={Challenge}
        options={{
          headerBackTitleVisible: false,
        }}
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
        name="Care"
        component={Care}
        options={{
          headerBackTitleVisible: false,
          title: "케어",
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
      <Stack.Screen
        name="CareDetails"
        component={CareDetails}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          title: route.params?.buttonName || "피부 루틴",
        })}
      />
      <Stack.Screen
        name="InteractiveCare"
        component={InteractiveCare}
        options={({ route }) => ({
          headerBackTitleVisible: false,
          title: route.params?.title || "피부 루틴",
        })}
      />
      <Stack.Screen
        name="FacialAnalysis"
        component={FacialAnalysis}
        options={{ headerBackTitleVisible: false, title: "얼굴 인식" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
