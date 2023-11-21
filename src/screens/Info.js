import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EmptyBox, PlusButton } from "../components";
import { AppName_small, NextButton, IconAccount } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
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
const TitleText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 18px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;
const WhiteContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 80px;
`;

const Info = ({ navigation }) => {
  return (
    <Container>
      <EmptyBox height={64} />
      <HorizonContainer>
        <AppName_small />
        <View>
          <EmptyBox height={15} />
          <TabName> myinfo</TabName>
        </View>
      </HorizonContainer>
      <EmptyBox height={20} />
      <TitleText>내 정보</TitleText>
      <EmptyBox height={20} />
      <WhiteContainer>
        <IconAccount />
        <EmptyBox height={14} />
        <PlusButton title="레포트" isFrontImage={true} />
        <NextButton />
      </WhiteContainer>
    </Container>
  );
};

export default Info;
