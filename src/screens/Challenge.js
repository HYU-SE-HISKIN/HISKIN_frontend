import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { CheckBoxContainer } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 36px;
  padding-top: 64px;
  padding-bottom: 46px;
`;
const AppName = styled.Text`
  font-family: "Calistoga - Regular";
  font-size: 24px;
  color: ${({ theme }) => theme.black};
  margin-bottom: 7.74px;
  align-self: flex-start;
`;
const ScoreText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  align-self: center;
  color: ${({ theme }) => theme.grey_5};
`;
const Score = styled.Text`
  font-family: "LG EI Headline - Bold";
  font-size: 52px;
  align-self: center;
  color: ${({ theme }) => theme.red};
`;
const StyledCircularProgress = styled(AnimatedCircularProgress)``;

const Challenge = () => {
  const [score, setScore] = useState(16);

  const handleOptionChange = (newOption) => {
    setScore(score + newOption);
  };

  return (
    <Container>
      <AppName>HISKIN</AppName>
      <StyledCircularProgress width={10} size={227} rotation={0} fill={score}>
        {(fill) => (
          <View>
            <ScoreText>오늘의 피부 점수</ScoreText>
            <Score>{score}</Score>
          </View>
        )}
      </StyledCircularProgress>
      <CheckBoxContainer
        questionnumber="Q1. "
        questioncontent="나는 오늘 피부 관리를 했다."
        onOptionChange={handleOptionChange}
      />
    </Container>
  );
};

export default Challenge;
