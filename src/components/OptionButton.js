import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.ivory_2 : theme.ivory_1};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 72px;
  height: 32px;
  margin-right: 11px;
`;
const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.grey_2};
`;

const OptionButton = ({
  containerStyle,
  title,
  onPress,
  isSelected,
  disabled,
}) => {
  return (
    <Container
      style={containerStyle}
      onPress={onPress}
      isSelected={isSelected}
      disabled={disabled}
    >
      <Title>{title}</Title>
    </Container>
  );
};

OptionButton.defaultProps = {
  isSelected: false,
};

OptionButton.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default OptionButton;
