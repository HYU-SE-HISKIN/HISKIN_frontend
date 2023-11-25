import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import EmptyBox from "./EmptyBox";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
`;
const AnimatedContainer = styled.View`
  position: relative;
  align-self: center;
  align-items: center;
`;
const IvoryContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 358px;
`;
const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.grey_0};
`;

const Loading = ({ title, subtitle, children }) => {
  return (
    <Container>
      <IvoryContainer>
        {
          <AnimatedContainer>
            <EmptyBox height={30} />
            <LottieView
              style={{
                width: 150,
                height: 150,
              }}
              source={require("../../assets/lottie/AnimationLoading.json")}
              autoPlay
              loop={true}
            />
          </AnimatedContainer>
        }
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </IvoryContainer>
    </Container>
  );
};

export default Loading;
