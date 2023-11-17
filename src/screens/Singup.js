import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { UserContext } from "../contexts/User";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Button, HyperLinkText, EmptyBox } from "../components";
import axios from "axios";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 40px 36px;
`;
const TitleText = styled.Text`
  font-family: "LG Smart - Bold Italic";
  font-size: 24px;
  color: ${({ theme }) => theme.black};
  margin-top: 53px;
  margin-bottom: 20px;
`;

const Signup = ({ navigation }) => {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const genderRef = useRef();
  const nicknameRef = useRef();
  const idRef = useRef();
  const passwordRef = useRef();

  const _handleSignupButtonPress = () => {
    const data = {
      name: name,
      gender: gender,
      nickname: nickname,
      userId: id,
      password: password,
    };

    axios({
      method: "post",
      url: `http://54.180.88.154:8080/api/register`,
      data: data,
      withCredentials: true,
    })
      .then(function a(response) {
        console.log(data);
        console.log(response);
        dispatch({ id, password });
      })
      .catch(function (error) {
        console.log("Axios Error:", error);
        console.log("Network Error:", error.response);
      });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container>
        <TitleText>회원가입</TitleText>
        <EmptyBox height={16} />
        <Input
          label="이름"
          value={name}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={() => genderRef.current.focus()}
          onBlur={() => setName(name.trim())}
          placeholder="이름을 입력해주세요"
          returnKeyType="next"
        />
        <EmptyBox height={16} />
        <Input
          ref={genderRef}
          label="성별"
          value={gender}
          onChangeText={(text) => setGender(text)}
          onSubmitEditing={() => nicknameRef.current.focus()}
          placeholder="성별을 입력해주세요"
          returnKeyType="done"
        />
        <EmptyBox height={16} />
        <Input
          ref={nicknameRef}
          label="닉네임"
          value={nickname}
          onChangeText={(text) => setNickname(text)}
          onSubmitEditing={() => idRef.current.focus()}
          placeholder="닉네임을 입력해주세요"
          returnKeyType="done"
        />
        <EmptyBox height={16} />
        <Input
          ref={idRef}
          label="아이디"
          value={id}
          onChangeText={(text) => setId(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="아이디를 입력해주세요"
          returnKeyType="next"
        />
        <EmptyBox height={16} />
        <Input
          ref={passwordRef}
          label="비밀번호"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={() => {}}
          placeholder="비밀번호를 입력해주세요"
          returnKeyType="done"
          isPassword
        />
        <EmptyBox height={16} />
        <Button title="가입하기" onPress={_handleSignupButtonPress} />
        <EmptyBox height={35} />
        <HyperLinkText
          value1="이미 회원이신가요? "
          value2="로그인"
          onPress={() => navigation.navigate("Login")}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
