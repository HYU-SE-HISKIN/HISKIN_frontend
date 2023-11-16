import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Challenge, Care, Community, Info } from "../screens";
import {
  IconHome,
  IconChallenge,
  IconCare,
  IconCommunity,
  IconMyinfo,
} from "../../assets/images";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "LG EI Text - Regular",
        },
      })}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => <IconHome width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="챌린지"
        component={Challenge}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <IconChallenge width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="케어"
        component={Care}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => <IconCare width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <IconCommunity width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={Info}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => <IconMyinfo width={size} height={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
