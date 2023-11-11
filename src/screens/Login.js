import React, { useState, useRef, useContext } from "react";
import styled, {View, Text} from "styled-components/native";
import axios from 'axios';
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
  font-family: 'Calistoga - Regular';
  font-size: 36px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 7.74px;;
`;
const SubtitleText = styled.Text`
  font-family: 'LG EI Text - Regular';
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-bottom : 110px;
`;

const Login = ({ navigation }) => {
  const [id, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const insets = useSafeAreaInsets();
  const ip = "192.168.0.101";

  const _handleLoginButtonPress = () => {
    const data ={userId:id, password:password}

    axios({
      method: 'post',
      url: `http://${ip}:8080/api/login`,
      data: data,
      withCredentials: true
    })
    .then(function a(response) { 
      console.log(response) 
    })
    .catch(function (error) {
      console.log("Axios Error:", error);
      console.log("Network Error:", error.response); // Log the network error
  
    });
  }

  return (
    <Container insets={insets}>
      <AppName>HISKIN</AppName>
      <SubtitleText>당신을 위한 피부 힐링</SubtitleText>
      <Input
        label="아이디"
        value={id}
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={() => passwordRef.current.focus()}
        placeholder={"아이디를 입력해주세요"}
        returnKeyType="next"
      />
      <Input
        ref={passwordRef}
        label="비밀번호"
        value={password}
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={_handleLoginButtonPress}
        placeholder={"비밀번호를 입력해주세요"}
        returnKeyType="done"
        isPassword
      />
      <Button title="로그인" onPress={_handleLoginButtonPress} />
      <HyperLinkText value1="아직 회원이 아니신가요? " value2="회원가입" onPress={() => navigation.navigate("Signup")} />
    </Container>
  );
};

export default Login;
