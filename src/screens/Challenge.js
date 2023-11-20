import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { CheckBoxContainer, EmptyBox } from "../components";
import { ScoreContext } from "../contexts";

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
  const [score, setScore] = useState(0);

  return (
    <ScrollView>
      <Container>
        <AppName>HISKIN</AppName>
        <EmptyBox height={32} />
        <StyledCircularProgress width={10} size={227} rotation={0} fill={score}>
          {(fill) => (
            <View>
              <ScoreText>오늘의 피부 점수</ScoreText>
              <Score>{score}</Score>
            </View>
          )}
        </StyledCircularProgress>
        <EmptyBox height={26} />
        <CheckBoxContainer
          questionnumber="Q1. "
          questioncontent="나는 오늘 피부 관리를 했다."
          setScore={setScore}
          score={score}
        />
        <EmptyBox height={10} />
        <CheckBoxContainer
          questionnumber="Q2. "
          questioncontent="나는 오늘 피부 관리를 했다."
          setScore={setScore}
          score={score}
        />
        <EmptyBox height={10} />
        <CheckBoxContainer
          questionnumber="Q3. "
          questioncontent="나는 오늘 피부 관리를 했다."
          setScore={setScore}
          score={score}
        />
        <EmptyBox height={10} />
        <CheckBoxContainer
          questionnumber="Q4. "
          questioncontent="나는 오늘 피부 관리를 했다."
          setScore={setScore}
          score={score}
        />
      </Container>
    </ScrollView>
  );
};

export default Challenge;
