import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { CheckBox_checked, CheckBox_unchecked } from "../../assets/images";

const Container = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;

const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.black};
`;

const CheckBox = ({ containerStyle, title, disabled }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container
      style={containerStyle}
      onPress={handlePress}
      isChecked={isChecked}
      disabled={disabled}
    >
      {isChecked ? <CheckBox_checked /> : <CheckBox_unchecked />}
      <Title isChecked={isChecked}>{title}</Title>
    </Container>
  );
};

CheckBox.defaultProps = {
  isChecked: false,
};

CheckBox.propTypes = {
  containerStyle: PropTypes.object,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CheckBox;
