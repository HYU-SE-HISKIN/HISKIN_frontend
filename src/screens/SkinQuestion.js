import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from 'axios';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button } from "../components";
import {SkinTypeQuestions} from "../utils/skinTypeQuestions";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const SkinQuestion = ({ route }) => {

  return (
    <Container>
    <Text>id: {route.params.id}</Text>
    </Container>
  );
};

export default SkinQuestion;
