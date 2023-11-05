import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, UserLogin, SkinTypeTest, SkinTypeResult} from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: theme.headerTintColor,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserLogin"
        component={UserLogin}
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
