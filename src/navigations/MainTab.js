import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Challenge, Care, Community, Info } from "../screens";
import {
  IconHome,
  IconHomeFilled,
  IconChallenge,
  IconChallengeFilled,
  IconCare,
  IconCareFilled,
  IconCommunity,
  IconCommunityFilled,
  IconMyinfo,
  IconMyinfoFilled,
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
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <IconHomeFilled width={size} height={size} />
            ) : (
              <IconHome width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="챌린지"
        component={Challenge}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <IconChallengeFilled width={size} height={size} />
            ) : (
              <IconChallenge width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="케어"
        component={Care}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <IconCareFilled width={size} height={size} />
            ) : (
              <IconCare width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <IconCommunityFilled width={size} height={size} />
            ) : (
              <IconCommunity width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={Info}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <IconMyinfoFilled width={size} height={size} />
            ) : (
              <IconMyinfo width={size} height={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
