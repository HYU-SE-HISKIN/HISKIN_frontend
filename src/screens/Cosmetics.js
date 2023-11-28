import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { ScrollView, Image } from "react-native";
import {
  Button,
  EmptyBox,
  IvoryContainer,
  OptionButton,
  WhiteContainer,
} from "../components";
import { skinTypeResults } from "../utils/skinTypeResults";

const Container = styled.View`
  padding: 0 17px;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
  padding: 16px;
`;
const DateText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.grey_5};
  align-self: center;
  margin-top: 14px;
`;
const SkinTypeText = styled.Text`
  font-family: "LG EI Text - Bold";
  font-size: 36px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
  padding: 0 16px;
`;
const VerticalContainer = styled.View`
  flex-direction: column;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;

const Cosmetics = () => {
  const [skinType, setSkinType] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleOptionButtonPress = (title) => {
    setMessage(title);
    setShowMessage(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.125.247.87:8080/api/skinType"
        );
        setSkinType(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <DateText>2023년 11월 30일</DateText>
        <EmptyBox height={18} />
        <IvoryContainer width={200}>
          <VerticalContainer>
            <TitleText>김한주님의 피부유형은</TitleText>
            <SkinTypeText>{skinType || "로딩 중..."}</SkinTypeText>
            <TitleText>입니다.</TitleText>
          </VerticalContainer>
        </IvoryContainer>
        <EmptyBox height={8} />
        <IvoryContainer width={283.5}>
          <TitleText>
            {skinTypeResults[skinType]?.title || "로딩 중..."}
          </TitleText>
        </IvoryContainer>
        <EmptyBox height={8} />
        <IvoryContainer width={283.5}>
          <TitleText>
            {skinTypeResults[skinType]?.subtitle.split("\n\n")[0] ||
              "로딩 중..."}
          </TitleText>
        </IvoryContainer>
        <EmptyBox height={8} />
        <Image
          source={{
            uri: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0018/A00000018374717ko.jpg?l=ko",
          }}
          style={{ width: 200, height: 200, borderRadius: 10 }}
          rounded
        />
        <EmptyBox height={8} />
        <HorizonContainer>
          <OptionButton
            title="더 많은 제품 추천 받기"
            width={168}
            isSelected={true}
            onPress={() => handleOptionButtonPress("더 많은 제품 추천 받기")}
          />
          <OptionButton
            title="이미 있어요"
            width={102}
            isSelected={true}
            onPress={() => handleOptionButtonPress("이미 있어요")}
          />
        </HorizonContainer>
        <EmptyBox height={25} />
        {showMessage && (
          <WhiteContainer
            width={193.5}
            height={53}
            borderRadius={16}
            style={{ alignSelf: "flex-end" }}
          >
            <TitleText>{message}</TitleText>
          </WhiteContainer>
        )}
      </Container>
    </ScrollView>
  );
};

export default Cosmetics;
