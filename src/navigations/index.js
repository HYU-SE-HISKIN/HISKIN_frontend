import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { Login } from "../screens";
import { Spinner } from "../components";
import { ProgressContext } from "../contexts";

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);

  return (
    <NavigationContainer>
      <AuthStack />
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
