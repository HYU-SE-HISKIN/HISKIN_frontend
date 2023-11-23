import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button } from "../components";
import { Image } from "../components";
import { Device_Registration } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
`;
const IvoryContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 358px;
`;
const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.grey_0};
`;

const DeviceRegistration = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Container>
      <IvoryContainer>
        <Title>sldkf</Title>
        <SubTitle>sdfsfd</SubTitle>
      </IvoryContainer>
    </Container>
  ) : (
    <Container>
      <IvoryContainer>
        <DeviceRegistration />
        <Title>zzzzz</Title>
      </IvoryContainer>
    </Container>
  );
};

export default DeviceRegistration;
