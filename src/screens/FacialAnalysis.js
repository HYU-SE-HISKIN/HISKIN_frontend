import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Image, ScrollView, Text } from "react-native";
import { Button, EmptyBox, Loading } from "../components";
import axios from "axios";

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
`;
const WhiteContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  padding: 39px 24px;
  width: 354px;
`;
const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.black};
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.grey_2};
`;
const Result = styled.Text`
  font-family: "LG EI Text - Bold";
  font-size: 36px;
  color: ${({ theme }) => theme.black};
`;
const Line = styled.View`
  width: 354px;
  height: 1px;
  margin-top: 36px;
  background-color: ${({ theme }) => theme.ivory_2};
`;

const FacialAnalysis = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");
  const image = route.params.image;

  useEffect(() => {
    const uploadImage = async () => {
      try {
        const serverUrl = "http://127.0.0.1/";
        const imageUri = image;

        const formData = new FormData();
        formData.append("file", {
          uri: imageUri,
          type: "image/jpeg",
          name: "image.jpg",
        });

        const response = await axios.post(serverUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setPrediction(response.data.prediction);
        console.log(response.data.prediction); // Log the updated value
        setLoading(false);
      } catch (error) {
        setError(error.message || "An error occurred");
        console.log(error);
      }
    };

    uploadImage();
  }, [image]);

  return (
    <Container>
      <ScrollView>
        {loading ? (
          <Loading
            title="오늘 하루 내 얼굴은?"
            subtitle="얼굴을 분석 중입니다."
          ></Loading>
        ) : (
          <View style={{ alignItems: "center" }}>
            <WhiteContainer>
              <SubTitle>오늘 내 얼굴</SubTitle>
              <EmptyBox height={10} />
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 300, borderRadius: 100 }}
              />
              <EmptyBox height={20} />
              <Result>여드름 피부</Result>
              <EmptyBox height={22} />
              <Title>오돌도톨 요철이 두드러지는{"\n"}여드름 피부</Title>
              <Line />
              <EmptyBox height={36} />
              <SubTitle>
                오늘 피부 관리가 부족해서 생긴 여드름일 수 있어요.{"\n"}
                내일부터는 수분, 피부관리, 스트레스, 음식에 더 신경써봐요!
              </SubTitle>
            </WhiteContainer>
            <EmptyBox height={10} />
            <Button title="완료" onPress={() => navigation.goBack()} />
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default FacialAnalysis;
