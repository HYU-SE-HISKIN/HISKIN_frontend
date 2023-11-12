import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button } from "../components";
import { Image } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const DeviceRegistration = ({ navigation }) => {
  return (
    <Container>
      <Button
        title="피부타입 테스트"
        onPress={() => navigation.navigate("SkinTypeTest")}
      />
      <Image
        source={{
          uri: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0018/A00000018374717ko.jpg?l=ko",
        }}
        style={{ width: 200, height: 200 }}
      />
    </Container>
  );
};

export default DeviceRegistration;
