import React, { useState, useRef, useContext } from "react";
import styled, { View, Text } from "styled-components/native";
import { Image } from "react-native";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, PlusButton, ImageLinker, EmptyBox } from "../components";
import { MyDevice } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
  margin-top: 64px;
  margin-bottom: 46px;
`;
const AppName = styled.Text`
  font-family: "Calistoga - Regular";
  font-size: 24px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 18px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <AppName>HISKIN</AppName>
      <EmptyBox height={8} />
      <TitleText>내 디바이스</TitleText>
      <EmptyBox height={10} />
      <MyDevice />
      <EmptyBox height={9} />
      <PlusButton
        title="새로운 디바이스 등록"
        subtitle="다른 사용자별 기기 등록"
        onPress={() => navigation.navigate("DeviceRegistration")}
      />
      <EmptyBox height={28} />
      <TitleText>챌린지</TitleText>
      <EmptyBox height={7} />
      <PlusButton
        title="나의 피부 MBTI는?"
        subtitle="나만의 피부타입 진단"
        onPress={() => navigation.navigate("SkinTypeTest")}
        isWhite={true}
      />
      <EmptyBox height={28} />
      <TitleText>제품 추천</TitleText>
      <Button
        title="화장품 추천"
        onPress={() => navigation.navigate("Cosmetics")}
      />
    </Container>
  );
};

export default Home;
