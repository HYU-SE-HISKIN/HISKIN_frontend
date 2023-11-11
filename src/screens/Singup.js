import React, { useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import { Input, Button } from '../components';
import axios from 'axios';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
`;

const Signup = ({navigation}) => {

  const [name, setName] = useState('');
  const [gender, setGender] =useState('');
  const [nickname, setNickname] =useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  const _handleSignupButtonPress = () => {

    const ip = "192.168.0.101";
    const data={
      name: name, gender: gender, birthdate:birthdate, nickname:nickname, userId:id, password:password
    }

    axios({
      method: 'post',
      url: `http://${ip}:8080/api/register`,
      data: data,
      withCredentials: true,
    })
    .then(function a(response) { 
      console.log(data)
      console.log(response) 
    })
    .catch(function (error) {
      console.log("Axios Error:", error);
      console.log("Network Error:", error.response);
  
    });
  }

  return (
      <Container>
        <Input
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
          onSubmitEditing={() => {
            setName(name.trim());
            emailRef.current.focus();
          }}
          onBlur={() => setName(name.trim())}
          placeholder="Name"
          returnKeyType="next"
        />
        <Input
          label="Gender"
          value={gender}
          onChangeText={text => setGender(text)}
          onSubmitEditing={() => {}}
          placeholder="Gender"
          returnKeyType="done"
        />
        <Input
          label="Nickname"
          value={nickname}
          onChangeText={text => setNickname(text)}
          onSubmitEditing={() => {}}
          placeholder="Nickname"
          returnKeyType="done"
        />
        <Input
          label="Id"
          value={id}
          onChangeText={text => setId(text)}
          placeholder="Id"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={() => {}}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <Button
          title="Signup"
          onPress={_handleSignupButtonPress}
        />
        <Button title="디바이스 등록" onPress={() => navigation.navigate("DeviceRegistration")} />

      </Container>
  );
};

export default Signup;