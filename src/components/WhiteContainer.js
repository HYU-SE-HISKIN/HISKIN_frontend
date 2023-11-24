import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  padding: 24px;
  width: 354px;
  height: ${({ height }) => height}px;
`;

const WhiteContainer = ({ height, borderRadius }) => {
  return <Container height={height} borderRadius={borderRadius} />;
};

export default WhiteContainer;
