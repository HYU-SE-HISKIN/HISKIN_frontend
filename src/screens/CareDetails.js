import React, { useState, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { EmptyBox, PlusButton, WhiteContainer } from "../components";
import { NextButton } from "../../assets/images";

const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
`;

const CareDetails = ({ route, navigation }) => {
  const { buttonName } = route.params;
  const name = buttonName.split(" ").slice(-2, -1)[0];

  return (
    <Container>
      <WhiteContainer height={80} borderRadius={24}>
        <PlusButton title={name + " 케어 루틴  1"} />
        <NextButton />
      </WhiteContainer>
      <EmptyBox height={10} />
      <WhiteContainer height={80} borderRadius={24}>
        <PlusButton title={name + " 케어 루틴  2"} />
        <NextButton />
      </WhiteContainer>
    </Container>
  );
};

export default CareDetails;
