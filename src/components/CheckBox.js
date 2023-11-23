import React, { useState, useEffect } from "react";
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

const CheckBox = ({
  title,
  value,
  setScore,
  score,
  touchedValue,
  setTouchedValue,
  checkedValue,
  setCheckedValue,
}) => {
  const isChecked = checkedValue === value;

  const handlePress = () => {
    // 체크박스가 아직 터치되지 않았거나 이미 체크된 경우 상태를 업데이트합니다.
    if (!touchedValue || !isChecked) {
      setTouchedValue(value);
      setCheckedValue(value);
      setScore(score + value * 5);
    }
  };

  return (
    <Container onPress={handlePress} isChecked={isChecked} value>
      {value == checkedValue ? <CheckBox_checked /> : <CheckBox_unchecked />}
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
