import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from 'axios';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button } from "../components";
import {SkinTypeQuestions} from "../utils/skinTypeQuestions";
import SkinQuestion from "./SkinQuestion";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const SkinTypeTest = ({ navigation, route}) => {
    const id = route.params.id;
    const currentQuestion = SkinTypeQuestions[id-1];
  
    const _nextQuestion =()=>{
        if (id<SkinTypeQuestions.length){
            console.log(id)
            navigation.push('SkinTypeTest', { id: id + 1 })
        } else {
            console.log(id)
            navigation.navigate('SkinTypeResult');
        }
    }
    


  return (
    <Container>
      <Text>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={_nextQuestion}
        />
      ))}
    </Container>
  )
};

export default SkinTypeTest;
