import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { View, Image, ScrollView, Text } from "react-native";
import { Woman_example } from "../../assets/images";
import { Button, EmptyBox, Loading } from "../components";
import { Camera, CameraType } from "expo-camera";

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

const FacialAnalysis = ({ navigation }) => {
  const [cameraPart, setCamera] = useState(true);
  const [startCamera, setStartCamera] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const _handleCamera = async () => {
    const { status } = await Camera.useCameraPermissions();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("access denied");
    }
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  return (
    <Container>
      <ScrollView>
        {cameraPart && (
          <View>
            {startCamera && (
              <Camera
                style={{ flex: 1, width: "100%" }}
                type={Camera.Constants.Type.front}
                ref={(r) => {
                  camera = r;
                }}
              ></Camera>
            )}
            {capturedImage && <Image source={{ uri: capturedImage }} />}
            <Button title="촬영하기" onPress={_handleCamera} />
          </View>
        )}
        {loading && (
          <Loading
            title="오늘 하루 내 얼굴은?"
            subtitle="얼굴을 분석 중입니다."
          ></Loading>
        )}
        {result && (
          <View style={{ alignItems: "center" }}>
            <WhiteContainer>
              <SubTitle>오늘 내 얼굴</SubTitle>
              <EmptyBox height={10} />
              <Woman_example
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
