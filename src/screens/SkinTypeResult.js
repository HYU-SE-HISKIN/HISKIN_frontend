import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button, EmptyBox } from "../components";
import { SkinTypeResultImage } from "../../assets/images";
import { skinTypeResults } from "../utils/skinTypeResults";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 20px;
`;
const WhiteContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  padding: 39px 24px;
  width: 354px;
`;
const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.black};
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.grey_2};
`;
const Result = styled.Text`
  font-family: "LG EI Text - Bold";
  font-size: 36px;
  color: ${({ theme }) => theme.black};
`;
const Line = styled.View`
  width: 354px;
  height: 1px;
  margin-top: 36px;
  background-color: ${({ theme }) => theme.ivory_2};
`;

const SkinTypeResult = ({ navigation, route }) => {
  const result = route.params.result;
  const resultMessage = skinTypeResults[result];

  console.log(resultMessage);

  return (
    <Container>
      <EmptyBox height={14} />
      <WhiteContainer>
        <Title>김한주님의 피부 유형은</Title>
        <EmptyBox height={12} />
        <SkinTypeResultImage />
        <EmptyBox height={20} />
        <Result>{`${result}`}</Result>
        <EmptyBox height={22} />
        <Title>{resultMessage.title}</Title>
        <Line />
        <EmptyBox height={36} />
        <SubTitle>{resultMessage.subtitle}</SubTitle>
      </WhiteContainer>
      <EmptyBox height={36} />
      <Button title="진단 마치기" onPress={() => navigation.navigate("Main")} />
    </Container>
  );
};

export default SkinTypeResult;
