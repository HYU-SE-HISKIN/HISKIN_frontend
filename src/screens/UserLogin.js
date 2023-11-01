import React, { useState, useRef} from 'react';
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

const UserLogin = () => {

  const [name, setName] = useState('');
  const [gender, setGender] =useState('');
  const [birthdate, setBirthdate] =useState('');
  const [nickname, setNickname] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const _handleSignupButtonPress = () => {

    const data={
      name: name, gender: gender, birthdate:birthdate, nickname:nickname, userId:email, password:password
    }
    

    axios({
      method: 'post',
      url: 'http://172.30.1.64:8080/api/register',
      data: data,
      withCredentials: true
    })
    .then(function a(response) { 
      console.log(data)
      console.log(response) 
    })
    .catch(function (error) {
      console.log("Axios Error:", error);
    console.log("Network Error:", error.response); // Log the network error
  
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
          label="Birthdate"
          value={birthdate}
          onChangeText={text => setBirthdate(text)}
          onSubmitEditing={() => {}}
          placeholder="Birthdate"
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
          ref={emailRef}
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
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
      </Container>
  );
};

export default UserLogin;