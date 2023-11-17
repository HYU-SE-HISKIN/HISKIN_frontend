import styled from "styled-components/native";

const Container = styled.View`
  height: ${({ height }) => height || 0}px;
`;

const EmptyBox = ({ height }) => {
  return <Container height={height} />;
};

export default EmptyBox;
