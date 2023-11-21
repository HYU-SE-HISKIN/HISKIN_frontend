import React from "react";
import styled from "styled-components/native";
import { MoreButton, Heart } from "../../assets/images";
import EmptyBox from "./EmptyBox";
import { CommunityImage } from "../../assets/images";

const WhiteContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.ivory_3};
  border-radius: 16px;
  padding: 24px;
  width: 354px;
`;
const HorizonContainer = styled.View`
  flex-direction: row;
`;
const VerticalContainer = styled.View`
  flex-direction: column;
  margin-left: 9px;
  margin-right: 20px;
`;
const Circle = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  background-color: ${({ color }) => color};
`;
const TitleText = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 14px;
  color: ${({ theme }) => theme.black};
  align-self: flex-start;
  width: 178px;
`;
const SubTitle = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.grey_6};
  margin-right: 11px;
`;
const Content = styled.Text`
  font-family: "LG EI Text - Regular";
  font-size: 12px;
  color: ${({ theme }) => theme.grey_8};
`;
const HeartValue = styled.Text`
  font-family: "LG EI Text - SemiBold";
  font-size: 12px;
  color: ${({ theme }) => theme.grey_7};
`;

const CommunityBox = ({
  color,
  title,
  subtitle,
  content,
  heartvalue,
  image,
}) => {
  return (
    <WhiteContainer>
      <Circle color={color} />
      <VerticalContainer>
        <HorizonContainer>
          <TitleText>{title}</TitleText>
          <SubTitle>{subtitle}</SubTitle>
          <MoreButton />
        </HorizonContainer>
        <EmptyBox height={6} />
        <Content>{content}</Content>
        {image && <EmptyBox height={9} />}
        {image && <CommunityImage />}
        <EmptyBox height={6} />
        <HorizonContainer>
          <Heart />
          <HeartValue>{heartvalue}</HeartValue>
        </HorizonContainer>
      </VerticalContainer>
    </WhiteContainer>
  );
};

export default CommunityBox;
