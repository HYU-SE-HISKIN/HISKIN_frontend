import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input, Button } from "../components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const insets = useSafeAreaInsets();
  const _handleLoginButtonPress = () => {};

  return (
    <Container insets={insets}>
      <Input
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder={"Email"}
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={_handleLoginButtonPress}
        placeholder={"Password"}
        returnKeyType="done"
        isPassword
      />
      <Button title="Login" onPress={() => navigation.navigate("UserLogin")} />
    </Container>
  );
};

export default Login;
