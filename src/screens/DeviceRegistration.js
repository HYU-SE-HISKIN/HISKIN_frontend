import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Device_Registration } from "../../assets/images";
import { Button, EmptyBox, Loading } from "../components";
import LottieView from "lottie-react-native";

const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
`;
const IvoryContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 358px;
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;

const DeviceRegistration = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Container>
      {loading ? (
        <View>
          <LottieView
            style={{
              width: 150,
              height: 136,
            }}
            source={require("../../assets/lottie/AnimationLoading.json")}
            autoPlay
            loop={true}
          />
          <Loading
            title="새로운 디바이스를 검색중입니다"
            subtitle="디바이스에 스마트폰을 가까이 해주세요"
          />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <IvoryContainer>
            <Device_Registration />
            <EmptyBox height={23} />
            <SubTitle>디바이스를 발견했습니다</SubTitle>
          </IvoryContainer>
          <EmptyBox height={40} />
          <Button title="등록" onPress={() => navigation.navigate("Main")} />
        </View>
      )}
    </Container>
  );
};

export default DeviceRegistration;
