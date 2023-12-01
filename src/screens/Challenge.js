import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, ScrollView } from "react-native";
import axios from "axios";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button, CheckBoxContainer, EmptyBox } from "../components";
import { AppName_small } from "../../assets/images";

const Container = styled.View`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
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

const Challenge = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [q1, setQ1] = useState(1);
  const [q2, setQ2] = useState(1);
  const [q3, setQ3] = useState(1);
  const [q4, setQ4] = useState(1);

  const _handleSubmit = () => {
    const data = { question1: q1, question2: q2, question3: q3, question4: q4 };
    console.log(data);

    axios({
      method: "post",
      url: `http://13.125.247.87:8080/api/challenge`,
      data: data,
      withCredentials: true,
    })
      .then(function a(response) {
        navigation.navigate("TakePhoto");
      })
      .catch(function (error) {
        console.log("Axios Error:", error);
        console.log("Network Error:", error.response); // Log the network error
      });
  };

  return (
    <ScrollView>
      <Container>
        <EmptyBox height={64} />
        <HorizonContainer>
          <AppName_small />
          <View>
            <EmptyBox height={15} />
            <TabName> challenge</TabName>
          </View>
        </HorizonContainer>
        <EmptyBox height={32} />
        <AnimatedCircularProgress
          width={7}
          size={227}
          rotation={0}
          fill={score}
          lineCap="round"
          tintColor="#EA4335" //theme.red
          backgroundColor="#E9E6DA" //theme.ivory_1
          prefill={60}
          style={{ alignSelf: "center" }}
        >
          {(fill) => (
            <View>
              <ScoreText>오늘의 피부 점수</ScoreText>
              <Score>{score}</Score>
            </View>
          )}
        </AnimatedCircularProgress>
        <EmptyBox height={26} />
        <CheckBoxContainer
          questionnumber="Q1. "
          questioncontent="나는 오늘 피부 관리를 했다."
          setScore={setScore}
          score={score}
          submit={setQ1}
        />
        <EmptyBox height={10} />
        <CheckBoxContainer
          questionnumber="Q2. "
          questioncontent="나는 오늘 수분 관리를 했다."
          setScore={setScore}
          score={score}
          submit={setQ2}
        />
        <EmptyBox height={10} />
        <CheckBoxContainer
          questionnumber="Q3. "
          questioncontent="나는 오늘 스트레스 관리를 했다."
          setScore={setScore}
          score={score}
          submit={setQ3}
        />
        <EmptyBox height={10} />
        <CheckBoxContainer
          questionnumber="Q4. "
          questioncontent="나는 오늘 음식 관리를 했다."
          setScore={setScore}
          score={score}
          submit={setQ4}
        />
        <EmptyBox height={10} />
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Button title="오늘 내 피부 촬영하기" onPress={_handleSubmit} />
        </View>
      </Container>
    </ScrollView>
  );
};

export default Challenge;
