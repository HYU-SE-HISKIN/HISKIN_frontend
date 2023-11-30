import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Device_Registration, Woman_example } from "../../assets/images";
import { Button, EmptyBox, Loading } from "../components";

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

const FacialAnalysis = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading
          title="오늘 하루 내 얼굴은?"
          subtitle="얼굴을 분석 중입니다."
        ></Loading>
      ) : (
        <View style={{ alignItems: "center" }}>
          <IvoryContainer>
            <Image source={Woman_example} style={{ width: 200, height: 300 }} />
            <EmptyBox height={10} />
            <SubTitle>오늘 내 얼굴</SubTitle>
          </IvoryContainer>
          <EmptyBox height={40} />
          <Button title="등록" onPress={() => navigation.navigate("Main")} />
        </View>
      )}
    </Container>
  );
};

export default FacialAnalysis;
