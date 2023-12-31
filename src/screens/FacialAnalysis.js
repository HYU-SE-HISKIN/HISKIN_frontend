import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Image, ScrollView, Text } from "react-native";
import { Button, EmptyBox, Loading } from "../components";
import axios from "axios";
const uuid = require("uuid");

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
`;
const WhiteContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.white_1};
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
    const deviceId = uuid.v4();

    const uploadImage = async () => {
      // axios
      //   .post(
      //     "http://192.168.0.100:5000/predict",
      //     {
      //       file: image,
      //     },
      //     {
      //       withCredentials: true,
      //       headers: {
      //         "Content-Type": "application/json",
      //         "Device-Id": deviceId, // Device-Id 헤더 추가
      //       },
      //     }
      //   )
      //   .then(function (response) {
      //     console.log(image, response);
      //     setLoading(false);
      //   })
      //   .catch(function (error) {
      //     console.error("Axios Error:", error);
      //     if (error.response) {
      //       console.error(
      //         "Server responded with a status code",
      //         error.response.status
      //       );
      //       console.error("Response data:", error.response.data);
      //     } else if (error.request) {
      //       console.error("No response received:", error.request);
      //     } else {
      //       console.error("Error setting up the request:", error.message);
      //     }
      //   });

      setTimeout(() => {
        setLoading(false);
      }, 5000);
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
