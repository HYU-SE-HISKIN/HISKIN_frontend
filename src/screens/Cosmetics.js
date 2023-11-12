import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const Cosmetics = ({ navigation }) => {
  return (
    <Container>
      <Button
        title="피부타입 테스트"
        onPress={() => navigation.navigate("SkinTypeTest")}
      />
    </Container>
  );
};

export default Cosmetics;
