import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome, Login, Signup, SkinTypeTest, SkinTypeResult} from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: theme.headerTintColor,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        initialParams={{
          id: 1,
        }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
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
    </Stack.Navigator>
  );
};

export default AuthStack;
