import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Challenge, Care, Community, Info } from "../screens";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Challenge" component={Challenge} options={{ headerShown: false }} />
      <Tab.Screen name="Care" component={Care} options={{ headerShown: false }} />
      <Tab.Screen name="Community" component={Community} options={{ headerShown: false }} />
      <Tab.Screen name="Info" component={Info} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default MainTab;
