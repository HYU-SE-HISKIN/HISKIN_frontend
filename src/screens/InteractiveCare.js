import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { EmptyBox, WhiteContainer } from "../components";

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
  ${Platform.OS === "ios" ? "shadow-color: #000;" : ""}
  ${Platform.OS === "ios" ? "shadow-offset: 0px 3px;" : ""}
  ${Platform.OS === "ios" ? "shadow-opacity: 0.25;" : ""}
  ${Platform.OS === "ios" ? "shadow-radius: 3px;" : ""}
  ${Platform.OS === "android" ? "elevation: 5;" : ""}
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;

const InteractiveCare = ({ navigation }) => {
  return (
    <Container>
      <WhiteContainer width={242} height={68} borderRadius={16} padding={18}>
        <TitleText>
          스피커의 음성 안내에 따라{"\n"}디바이스를 조작해주세요.
        </TitleText>
      </WhiteContainer>
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
