import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Input, Button } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 20px;
`;

const SkinTypeResult = ({ navigation, route }) => {
  const result = route.params.result;

  return (
    <Container>
      <Text>{`${result}`}</Text>
      <Button
        title={`${result}`}
        onPress={() => navigation.navigate("SkinTypeTest")}
      />
      <Button title="home" onPress={() => navigation.navigate("Main")} />
    </Container>
  );
};

export default SkinTypeResult;
