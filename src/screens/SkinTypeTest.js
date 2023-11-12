import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Button, ChoiceContainer } from "../components";
import { skinTypeQuestions } from "../utils/skinTypeQuestions";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const SkinTypeTest = ({ navigation, route }) => {
  const ip = "172.30.1.35";
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
        url: `http://${ip}:8080/api/skin-test/${question_name}`,
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
        url: `http://${ip}:8080/api/skin-test/${question_name}`,
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
      <Text>{currentQuestion.question}</Text>
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
