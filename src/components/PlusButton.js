import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: center;
  border-radius: 24px;
  width: ${(isFrontImage) => (isFrontImage ? 244 : 282)}px;
  height: 80px;
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
const ThirdTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.grey_2};
`;

const PlusButton = ({
  containerStyle,
  title,
  subtitle,
  thirdtitle,
  onPress,
  isFrontImage,
}) => {
  return (
    <Container
      style={containerStyle}
      onPress={onPress}
      isFrontImage={isFrontImage}
    >
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {thirdtitle && <ThirdTitle>{thirdtitle}</ThirdTitle>}
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
