import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { theme } from "../theme";

const Graph = ({ text, data }) => {
  return (
    <View>
      <Text>{text}</Text>
      <LineChart
        data={data}
        width={317}
        height={180}
        yAxisInterval={25}
        chartConfig={{
          backgroundGradientFrom: `rgba(255, 255, 255, 0)`,
          backgroundGradientTo: `rgba(255, 255, 255, 0)`,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "4",
            strokeWidth: "1.85",
          },
          decimalPlaces: 0,
        }}
        withVerticalLines
        fromZero
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Graph;
