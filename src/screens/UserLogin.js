import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { ImageLinker } from "../components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const UserLogin = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ fontSize: 30 }}>UserLogin</Text>
      <Text style={{ fontSize: 15 }}>User1</Text>
      <ImageLinker rounded onPress={() => navigation.navigate("Login")} />
      <Text style={{ fontSize: 15 }}>User2</Text>
      <ImageLinker rounded onPress={() => navigation.navigate("Login")} />
      <Text style={{ fontSize: 15 }}>User3</Text>
      <ImageLinker rounded onPress={() => navigation.navigate("Login")} />
      <Text style={{ fontSize: 15 }}>User4</Text>
      <ImageLinker rounded onPress={() => navigation.navigate("Login")} />
    </Container>
  );
};

export default UserLogin;
