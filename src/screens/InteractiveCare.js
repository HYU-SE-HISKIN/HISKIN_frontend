import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
`;

const AnimatedContainer = styled.View`
  position: relative;
`;

const OutlineCircle = styled.View`
  position: absolute;
  align-self: center;
  width: 74px;
  height: 74px;
  border-radius: 37px;
  border-width: 5px;
  border-color: #fff;
  margin-top: 30px;
`;

const InteractiveCare = ({ navigation }) => {
  return (
    <Container>
      <AnimatedContainer>
        <OutlineCircle />
        <LottieView
          style={{
            width: 150,
            height: 136,
          }}
          source={require("../../assets/lottie/AnimationCircle.json")}
          autoPlay
          loop={true}
        />
      </AnimatedContainer>
    </Container>
  );
};

export default InteractiveCare;
