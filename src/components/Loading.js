import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_0};
  padding: 0 18px;
`;
const IvoryContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: 24px;
  padding: 24px;
  width: 354px;
  height: 358px;
`;
const Title = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 16px;
  color: ${({ theme }) => theme.black};
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.grey_0};
`;

const Loading = (title, subtitle) => {
  return (
    <Container>
      <IvoryContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </IvoryContainer>
    </Container>
  );
};
