import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { Text, Image } from 'react-native';
import axios from 'axios';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input, Button } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: 100px;
  padding-bottom: 10px;
`;

const Loading = () => {

  return (
    <Container>
      <Image
        source={require('../../assets/loading/Group 170.png')}
      />
      <Text>Welcome my app!</Text>
    </Container>
  );
};

export default Loading;
