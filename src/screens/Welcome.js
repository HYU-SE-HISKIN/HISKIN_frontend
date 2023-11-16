import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import axios from "axios";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input, Button } from "../components";
import {
  welcomeLayer1,
  welcomeLayer2,
  welcomeLayer3,
  bar1,
  bar2,
  bar3,
} from "../../assets/images";
import { welcomeMessages } from "../utils/welcomeMessages";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 36px;
  padding-top: 100px;
  padding-bottom: 10px;
`;
const TitleText = styled.Text`
  font-family: "LG EI Headline - SemiBold";
  font-size: 28px;
  color: ${({ theme }) => theme.black};
  margin-top: 48px;
  align-self: flex-start;
`;
const SubtitleText = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  margin-top: 4px;
  margin-bottom: 24px;
  align-self: flex-start;
`;

const Welcome = ({ navigation, route }) => {
  const id = route.params.id;
  const currentPage = welcomeMessages[id - 1];

  const getImageSource = (id) => {
    switch (id) {
      case 1:
        return welcomeLayer1;
      case 2:
        return welcomeLayer2;
      case 3:
        return welcomeLayer3;
      default:
        return welcomeLayer1;
    }
  };
  const getBarSource = (id) => {
    switch (id) {
      case 1:
        return bar1;
      case 2:
        return bar2;
      case 3:
        return bar3;
      default:
        return bar1;
    }
  };
  const smallerButtonStyle = {
    width: 32,
    height: 32,
    borderRadius: 16,
  };

  return (
    <Container>
      <Image source={getImageSource(id)} />
      <TitleText>{currentPage.title}</TitleText>
      <SubtitleText>{currentPage.subtitle}</SubtitleText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button
          title={"<"}
          containerStyle={{ ...smallerButtonStyle, marginRight: -6 }}
          onPress={() => {
            if (id > 1) {
              navigation.push("Welcome", { id: id - 1 });
            } else {
              navigation.goBack();
            }
          }}
        />
        <Button
          title={">"}
          containerStyle={{ ...smallerButtonStyle }}
          onPress={() => {
            if (id < 3) {
              navigation.push("Welcome", { id: id + 1 });
            }
          }}
        />
      </View>
      <Image
        source={getBarSource(id)}
        style={{ width: 318, height: 2, marginBottom: 36 }}
      />
      <Button title="시작하기" onPress={() => navigation.navigate("Login")} />
    </Container>
  );
};

export default Welcome;
