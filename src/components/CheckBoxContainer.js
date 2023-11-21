import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import CheckBox from "./CheckBox";

const WhiteContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: 24px;
  padding: 19px;
  width: 354px;
  height: 129px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;
const HorizonContainer_check = styled.View`
  flex-direction: row;
  gap: 36px;
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
  setScore,
  score,
}) => {
  return (
    <WhiteContainer>
      <HorizonContainer>
        <QuestionNumber>{questionnumber}</QuestionNumber>
        <QuestionContent>{questioncontent}</QuestionContent>
      </HorizonContainer>
      <HorizonContainer_check>
        <CheckBox
          title="매우 못함"
          value={1}
          setScore={setScore}
          score={score}
        />
        <CheckBox title="못함" value={2} setScore={setScore} score={score} />
        <CheckBox title="보통" value={3} setScore={setScore} score={score} />
        <CheckBox title="잘함" value={4} setScore={setScore} score={score} />
        <CheckBox
          title="매우 잘함"
          value={5}
          setScore={setScore}
          score={score}
        />
      </HorizonContainer_check>
    </WhiteContainer>
  );
};

export default CheckBoxContainer;
