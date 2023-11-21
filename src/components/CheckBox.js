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

const CheckBox = ({
  title,
  value,
  setScore,
  score,
  selectedValue,
  setSelectedValue,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setSelectedValue(value);
    setIsChecked(setSelectedValue === value || !isChecked);
    //처음 3 클릭 : selectedValue==3 value=3 isChecked==false->true <checked>
    //옆에 4 클릭 : selectedValue==4 value=4 isChecked==fasle->true <checked>
    ////그때 3은 : selectedValue==4 value=3 isChecked==true->false <unchecked>
    //다시 4 클릭 : selectedValue==4 value=4 isChecked==true->false <unchecked>
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
