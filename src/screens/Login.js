import React, { useState, useRef, useContext } from "react";
import styled, { View, Text } from "styled-components/native";
import { UserContext } from "../contexts/User";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input, Button, HyperLinkText, EmptyBox } from "../components";
import { AppName_large, IconID, IconPW } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 36px;
`;
const SubtitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
`;

const Login = ({ navigation }) => {
  const { dispatch } = useContext(UserContext);
  const [id, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const insets = useSafeAreaInsets();

  const _handleLoginButtonPress = async () => {
    const data = { userId: id, password: password };

    axios({
      method: "post",
      url: `http://13.125.247.87:8080/api/login`,
      data: data,
      withCredentials: true,
    })
      .then(function a(response) {
        dispatch({ id, password });
        console.log(response);
      })
      .catch(function (error) {
        console.log("Axios Error:", error);
        console.log("Network Error:", error.response); // Log the network error
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container>
        <EmptyBox height={193} />
        <AppName_large />
        <SubtitleText>당신을 위한 피부 힐링</SubtitleText>
        <EmptyBox height={100} />
        <Input
          svgComponent={<IconID />}
          label="아이디"
          value={id}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder={"아이디를 입력해주세요"}
          returnKeyType="next"
        />
        <EmptyBox height={23} />
        <Input
          svgComponent={<IconPW />}
          ref={passwordRef}
          label="비밀번호"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder={"비밀번호를 입력해주세요"}
          returnKeyType="done"
          isPassword
        />
        <EmptyBox height={30} />
        <Button title="로그인" onPress={_handleLoginButtonPress} />
        <EmptyBox height={100} />
        <HyperLinkText
          value1="아직 회원이 아니신가요? "
          value2="회원가입"
          onPress={() => navigation.navigate("Signup")}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
