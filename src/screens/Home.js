import React, { useState, useRef, useContext } from "react";
import styled, { View, Text } from "styled-components/native";
import { Image } from "react-native";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input, Button, HyperLinkText } from "../components";
import { mydevice } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 18px;
  padding-top: 64px;
  padding-bottom: 46px;
`;
const AppName = styled.Text`
  font-family: "Calistoga - Regular";
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 7.74px;
  align-self: flex-start;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  margin-top: 4px;
  margin-bottom: 24px;
  align-self: flex-start;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <AppName>HISKIN</AppName>
      <TitleText>내 디바이스</TitleText>
      <Image source={mydevice} />
      <Button
        title="디바이스등록"
        onPress={() => navigation.navigate("DeviceRegistration")}
      />
      <Button
        title="피부타입 테스트"
        onPress={() => navigation.navigate("SkinTypeTest")}
      />
      <Button
        title="화장품 추천"
        onPress={() => navigation.navigate("Cosmetics")}
      />
    </Container>
  );
};

export default Home;
