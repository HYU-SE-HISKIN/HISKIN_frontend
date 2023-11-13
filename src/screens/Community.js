import React, { useState, useRef, useContext } from "react";
import styled, { View, Text } from "styled-components/native";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PlusButton } from "../components";

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

const Community = ({ navigation }) => {
  return (
    <Container>
      <AppName>HISKIN</AppName>
      <PlusButton
        subtitle="어떤 생각을 하고 있나요?"
        onPress={() => navigation.navigate("DeviceRegistration")}
      />
    </Container>
  );
};

export default Community;
