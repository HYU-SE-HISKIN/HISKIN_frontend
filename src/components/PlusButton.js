import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  background-color: ${({ theme, isWhite }) =>
    isWhite ? theme.white : theme.ivory_1};
  align-items: flex-start;
  justify-content: center;
  border-radius: 24px;
  width: 354px;
  height: 80px;
  padding: 24px;
  margin-bottom: 8px;
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

const PlusButton = ({ containerStyle, title, subtitle, onPress, isWhite }) => {
  return (
    <Container style={containerStyle} onPress={onPress} isWhite={isWhite}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

PlusButton.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onPress: PropTypes.func,
  isWhite: PropTypes.bool,
};

export default PlusButton;
