import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "../contexts/User";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user?.id && user?.password ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
