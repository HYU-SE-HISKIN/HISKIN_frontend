import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { Text, Image } from "react-native";
import { Button, IvoryContainer } from "../components";

const Container = styled.View`
  flex: 1;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;

const Cosmetics = ({ navigation }) => {
  const [skinType, setSkinType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://13.125.247.87:8080/api/skinType`
        );
        setSkinType(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <IvoryContainer>
        <TitleText>{skinType}</TitleText>
      </IvoryContainer>
      <Image
        source={{
          uri: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0018/A00000018374717ko.jpg?l=ko",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button title={""} onPress={() => {}} />
    </Container>
  );
};

export default Cosmetics;
