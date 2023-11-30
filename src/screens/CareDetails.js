import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { EmptyBox, PlusButton, WhiteContainer } from "../components";
import { NextButton } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 28px;
  margin-top: 7px;
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 18px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
`;

const CareDetails = ({ route, navigation }) => {
  const { buttonName } = route.params;
  const name = buttonName.split(" ").slice(-2, -1)[0] + " 케어 루틴  ";

  return (
    <Container>
      <TitleText>케어</TitleText>
      <EmptyBox height={15} />
      <WhiteContainer width={334} height={80} borderRadius={24} padding={24}>
        <PlusButton
          width={264}
          title={name + "1"}
          subtitle="30분"
          onPress={() =>
            navigation.navigate("InteractiveCare", {
              title: name + "1",
            })
          }
        />
        <NextButton />
      </WhiteContainer>
      <EmptyBox height={10} />
      <WhiteContainer width={334} height={80} borderRadius={24} padding={24}>
        <PlusButton
          width={264}
          title={name + "2"}
          subtitle="45분"
          onPress={() =>
            navigation.navigate("InteractiveCare", {
              title: name + "2",
            })
          }
        />
        <NextButton />
      </WhiteContainer>
    </Container>
  );
};

export default CareDetails;
