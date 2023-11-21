import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { CheckBoxContainer, EmptyBox } from "../components";
import { AppName_small } from "../../assets/images";

const Container = styled.View`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
  padding-top: 64px;
  padding-bottom: 46px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;
const TabName = styled.Text`
  font-family: "LG Smart - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  align-self: flex-end;
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
const StyledCircularProgress = styled(AnimatedCircularProgress)`
  align-self: center;
`;

const Challenge = () => {
  const [score, setScore] = useState(0);

  return (
    <ScrollView>
      <Container>
        <HorizonContainer>
          <AppName_small />
          <View>
            <EmptyBox height={15} />
            <TabName> challenge</TabName>
          </View>
        </HorizonContainer>
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
