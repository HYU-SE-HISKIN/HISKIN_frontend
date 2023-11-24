import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
`;

const InteractiveCare = ({ navigation }) => {
  return (
    <Container>
      <LottieView
        style={{
          width: 87,
          height: 87,
        }}
        source={require("../../assets/lottie/AnimationCircle.json")}
        autoPlay
        loop={true}
      />
    </Container>
  );
};

export default InteractiveCare;
