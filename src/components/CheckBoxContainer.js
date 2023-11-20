import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";

const WhiteContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  padding: 19px;
  width: 354px;
  height: 129px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;
const HorizonContainer_check = styled.View`
  flex-direction: row;
  gap: 36;
`;
const QuestionNumber = styled.Text`
  font-family: "LG EI Text - Bold";
  font-size: 16px;
  color: ${({ theme }) => theme.grey_3};
  margin-bottom: 20px;
`;
const QuestionContent = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 16px;
  color: ${({ theme }) => theme.grey_4};
  margin-bottom: 10px;
`;
const CheckBoxContainer = ({
  questionnumber,
  questioncontent,
  onOptionChange,
}) => {
  const [option, setOption] = useState(0);

  const handleOptionChange = (newOption) => {
    setOption(newOption);
    onOptionChange(newOption);
  };

  return (
    <WhiteContainer>
      <HorizonContainer>
        <QuestionNumber>{questionnumber}</QuestionNumber>
        <QuestionContent>{questioncontent}</QuestionContent>
      </HorizonContainer>
      <HorizonContainer_check>
        <CheckBox title="매우 못함" onPress={() => handleOptionChange(1)} />
        <CheckBox title="못함" onPress={() => handleOptionChange(2)} />
        <CheckBox title="보통" onPress={() => handleOptionChange(3)} />
        <CheckBox title="잘함" onPress={() => handleOptionChange(4)} />
        <CheckBox title="매우 잘함" onPress={() => handleOptionChange(5)} />
      </HorizonContainer_check>
    </WhiteContainer>
  );
};

export default CheckBoxContainer;
