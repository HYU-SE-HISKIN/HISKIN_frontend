import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button, EmptyBox } from "../components";
import { Image } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 20px;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;

const SkinReport = ({ navigation }) => {
  return (
    <Container>
      <EmptyBox height={24} />
      <TitleText>기간</TitleText>
    </Container>
  );
};

export default SkinReport;
