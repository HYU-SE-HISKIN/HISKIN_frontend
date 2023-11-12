import React, { useState, useRef, useContext } from "react";
import styled, { View, Text } from "styled-components/native";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input, Button, HyperLinkText } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 36px;
  padding-top: 202.74px;
  padding-bottom: 46px;
`;
const AppName = styled.Text`
  font-family: "Calistoga - Regular";
  font-size: 36px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 7.74px;
`;

const Challenge = ({ navigation }) => {
  return (
    <Container>
      <AppName>HISKIN</AppName>
      <Button
        title="디바이스등록"
        onPress={() => navigation.navigate("DeviceRegistration")}
      />
      <Button
        title="피부타입 테스트"
        onPress={() => navigation.navigate("SkinTypeTest")}
      />
    </Container>
  );
};

export default Challenge;
