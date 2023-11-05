import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from 'axios';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button } from "../components";
import {skinTypeQuestions} from "../utils/skinTypeQuestions";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const SkinTypeTest = ({ navigation, route}) => {
    const id = route.params.id;
    const currentQuestion = skinTypeQuestions[id-1];

    const _nextQuestion =(index)=>{
        if (id<skinTypeQuestions.length){
            console.log(id,index)
            navigation.push('SkinTypeTest', { id: id + 1 })
        } else {
            console.log(id, index)
            navigation.navigate('SkinTypeResult');
        }
    }
    


  return (
    <Container>
      <Text>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <Button
          key={index}
          title={index+option}
          onPress={()=>_nextQuestion(index)}
        />
      ))}
    </Container>
  )
};

export default SkinTypeTest;
