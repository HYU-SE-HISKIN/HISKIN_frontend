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

const CheckBox = ({ title, value, setScore, score }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setScore(score - value * 5);
    } else {
      setScore(score + value * 5);
    }
  };

  return (
    <Container onPress={handlePress} isChecked={isChecked} value>
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
