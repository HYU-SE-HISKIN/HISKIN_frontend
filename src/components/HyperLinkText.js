import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  margin: 10px 0;
`;
const Label = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 16px;
  color: ${({ theme }) => theme.label};
`;
const StyledText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 16px;
  color: ${({ theme }) => theme.hyperlinkText};
  text-decoration-line: underline;
`;

const HyperLinkText = ({ onPress, value1, value2 }) => {
  return (
    <Container onPress={onPress}>
      <Label>{value1}</Label>
      <StyledText>{value2}</StyledText>
    </Container>
  );
};

export default HyperLinkText;
