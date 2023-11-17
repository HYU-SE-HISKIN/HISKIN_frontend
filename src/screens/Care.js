import React, { useState, useRef, useContext } from "react";
import styled, { View, Text } from "styled-components/native";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Input,
  Button,
  HyperLinkText,
  EmptyBox,
  ImageLinker,
} from "../components";
import {
  CareMain,
  CareRoutine1,
  CareRoutine2,
  CareRoutine3,
} from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
  padding-top: 64px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;
const WhiteContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.white};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 86px;
`;
const AppName = styled.Text`
  font-family: "Calistoga - Regular";
  font-size: 24px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;
const Title = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.grey_2};
`;

const Care = ({ navigation }) => {
  return (
    <Container>
      <AppName>HISKIN</AppName>
      <EmptyBox height={8} />
      <WhiteContainer>
        <Title>Pra.L 프라엘 케어</Title>
        <SubTitle>다양한 케어를 직접 경험하세요</SubTitle>
      </WhiteContainer>
      <EmptyBox height={12} />
      <ImageLinker
        svgComponent={<CareMain />}
        onPress={() => navigation.navigate("Cosmetics")}
      />
      <HorizonContainer>
        <ImageLinker
          svgComponent={<CareRoutine1 />}
          onPress={() => navigation.navigate("Cosmetics")}
        />
        <ImageLinker
          svgComponent={<CareRoutine2 />}
          onPress={() => navigation.navigate("Cosmetics")}
        />
        <ImageLinker
          svgComponent={<CareRoutine3 />}
          onPress={() => navigation.navigate("Cosmetics")}
        />
      </HorizonContainer>
    </Container>
  );
};

export default Care;
