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
  ImageLinker,
} from "../components";
import {
  AppName_small,
  CareMain,
  CareRoutine1,
  CareRoutine2,
  CareRoutine3,
} from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
  padding-top: 64px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;
const WhiteContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.white};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 86px;
`;
const TabName = styled.Text`
  font-family: "LG Smart - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  align-self: flex-end;
`;
const Title = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.grey_2};
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
      <WhiteContainer>
        <Title>Pra.L 프라엘 케어</Title>
        <SubTitle>다양한 케어를 직접 경험하세요</SubTitle>
      </WhiteContainer>
      <EmptyBox height={12} />
      <ImageLinker
        svgComponent={<CareMain />}
        onPress={() => navigation.navigate("Cosmetics")}
      />
      <EmptyBox height={18} />
      <HorizonContainer>
        <ImageLinker
          svgComponent={<CareRoutine1 />}
          onPress={() => navigation.navigate("Cosmetics")}
        />
        <ImageLinker
          svgComponent={<CareRoutine2 />}
          onPress={() => navigation.navigate("Cosmetics")}
        />
        <ImageLinker
          svgComponent={<CareRoutine3 />}
          onPress={() => navigation.navigate("Cosmetics")}
        />
      </HorizonContainer>
    </Container>
  );
};

export default Care;
