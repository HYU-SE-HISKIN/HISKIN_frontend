import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TRANSPARENT = "transparent";

const Container = styled.TouchableOpacity`
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? `${theme.optionSelectedBackground}33`
      : theme.optionBackground};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.optionSelectedBackground : TRANSPARENT};
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 354px;
  height: 60px;
  margin-bottom: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.optionSelectedLabel : theme.optionLabel};
`;

const ChoiceContainer = ({ containerStyle, title, onPress, disabled }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress();
  };

  return (
    <Container
      style={containerStyle}
      onPress={handlePress}
      isSelected={isSelected}
      disabled={disabled}
    >
      <Title isSelected={isSelected}>{title}</Title>
    </Container>
  );
};

ChoiceContainer.defaultProps = {
  isSelected: false,
};

ChoiceContainer.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ChoiceContainer;
