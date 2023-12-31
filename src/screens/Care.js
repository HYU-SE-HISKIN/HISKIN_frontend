import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { UserContext } from "../contexts/User";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Input,
  Button,
  HyperLinkText,
  EmptyBox,
  WhiteContainer,
  PlusButton,
} from "../components";
import {
  AppName_small,
  Dermathera_large,
  Intensive_large,
  Essential_large,
  NextButton,
} from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
  padding-top: 64px;
`;
const TabName = styled.Text`
  font-family: "LG Smart - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  align-self: flex-end;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 18px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;

const Care = ({ navigation }) => {
  return (
    <Container>
      <HorizonContainer>
        <AppName_small />
        <View>
          <EmptyBox height={15} />
          <TabName> care</TabName>
        </View>
      </HorizonContainer>
      <EmptyBox height={8} />
      <TitleText>연결된 디바이스</TitleText>
      <EmptyBox height={15} />
      <WhiteContainer height={72} borderRadius={24} padding={12}>
        <Dermathera_large />
        <PlusButton
          width={250}
          title="  LG Pra.L 더마쎄라 BLQ1"
          subtitle="  5시간 전 사용"
          onPress={() =>
            navigation.navigate("CareDetails", {
              buttonName: "LG Pra.L 더마쎄라 BLQ1",
            })
          }
        />
        <NextButton />
      </WhiteContainer>
      <EmptyBox height={12} />
      <WhiteContainer height={72} borderRadius={24} padding={12}>
        <Intensive_large />
        <PlusButton
          width={250}
          title="  인텐시브 멀티케어 BLP1"
          subtitle="  2일 전 사용"
          onPress={() =>
            navigation.navigate("CareDetails", {
              buttonName: "인텐시브 멀티케어 BLP1",
            })
          }
        />
        <NextButton />
      </WhiteContainer>
      <EmptyBox height={12} />
      <WhiteContainer height={72} borderRadius={24} padding={12}>
        <Essential_large />
        <PlusButton
          width={250}
          title="  에센셜 부스터 BBP1"
          subtitle="  3일 전 사용"
          onPress={() =>
            navigation.navigate("CareDetails", {
              buttonName: "에센셜 부스터 BBP1",
            })
          }
        />
        <NextButton />
      </WhiteContainer>
    </Container>
  );
};

export default Care;
