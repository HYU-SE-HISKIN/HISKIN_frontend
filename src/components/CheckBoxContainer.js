import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.black};
`;

const CheckBoxContainer = (question) => {
  return (
    <Container>
      <Title>{question}</Title>
      <CheckBox title="매우 못함" />
      <CheckBox title="못함" />
      <CheckBox title="보통" />
      <CheckBox title="잘함" />
      <CheckBox title="매우 잘함" />
    </Container>
  );
};

export default CheckBoxContainer;
