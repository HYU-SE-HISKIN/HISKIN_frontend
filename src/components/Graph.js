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
        width={300}
        height={200}
        yAxisLabel="Count"
        yAxisInterval={25}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "5",
            strokeWidth: "1.85",
            stroke: { color: theme.red },
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Graph;
