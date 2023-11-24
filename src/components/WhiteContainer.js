import styled from "styled-components/native";

const Box = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.white_1};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  padding: ${({ padding }) => padding || 24}px;
  width: 354px;
  height: ${({ height }) => height}px;
`;

const WhiteContainer = ({ height, borderRadius, padding, children }) => {
  return (
    <Box height={height} borderRadius={borderRadius} padding={padding}>
      {children}
    </Box>
  );
};

export default WhiteContainer;
