import React from "react";
import { View } from "react-native";

const HorizontalContainer = ({ component1, component2 }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ flex: 1 }}>{component1}</View>
      <View style={{ flex: 1 }}>{component2}</View>
    </View>
  );
};

export default HorizontalContainer;
