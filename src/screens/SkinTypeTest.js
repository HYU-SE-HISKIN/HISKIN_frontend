import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { Button, ChoiceContainer, EmptyBox } from "../components";
import { skinTypeQuestions } from "../utils/skinTypeQuestions";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 20px;
  margin-top: 14px;
`;
const WhiteContainer = styled.View`
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  padding: 18px;
  width: 354px;
`;
const QuestionNumber = styled.Text`
  font-family: "LG EI Text - Bold";
  font-size: 24px;
  color: ${({ theme }) => theme.grey_3};
  margin-bottom: 20px;
`;
const QuestionContent = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.grey_4};
  margin-bottom: 10px;
`;
const Line = styled.View`
  width: 354px;
  height: 1px;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.ivory_2};
`;

const SkinTypeTest = ({ navigation, route }) => {
  const id = route.params.id;
  const currentQuestion = skinTypeQuestions[id - 1];
  const [answer, setAnswer] = useState(null);

  const _nextQuestion = (index) => {
    const question_list = [
      "1-1",
      "1-2",
      "2-1",
      "2-2",
      "3-1",
      "3-2",
      "4-1",
      "4-2",
    ];
    const question_name = "question" + question_list[id - 1];
    const data = { [question_name + "Response"]: index };

    if (id < skinTypeQuestions.length) {
      console.log(id, index);

      axios({
        method: "post",
        url: `http://13.125.247.87:8080/api/skin-test/${question_name}`,
        data: data,
        withCredentials: true,
      })
        .then(function a(response) {
          //console.log(response)
        })
        .catch(function (error) {
          console.log("Axios Error:", error);
          console.log("Network Error:", error.response);
        });
      navigation.push("SkinTypeTest", { id: id + 1 });
    } else {
      console.log(id, index);

      axios({
        method: "post",
        url: `http://13.125.247.87:8080/api/skin-test/${question_name}`,
        data: data,
        withCredentials: true,
      })
        .then(function a(response) {
          //console.log(response)
          navigation.navigate("SkinTypeResult", {
            result: response.data,
          });
        })
        .catch(function (error) {
          console.log("Axios Error:", error);
          console.log("Network Error:", error.response);
        });
    }
  };

  return (
    <Container>
      <WhiteContainer>
        <QuestionNumber>Q{id}</QuestionNumber>
        <QuestionContent>{currentQuestion.question}</QuestionContent>
      </WhiteContainer>
      <Line />
      <EmptyBox height={30} />
      {currentQuestion.options.map((option, index) => (
        <ChoiceContainer
          key={index}
          title={option}
          onPress={() => setAnswer(index)}
        />
      ))}
      <Button
        title={`다음 (${id}/8)`}
        onPress={() => _nextQuestion(answer + 1)}
      />
    </Container>
  );
};

export default SkinTypeTest;
