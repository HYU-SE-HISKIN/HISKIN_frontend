import styled from "styled-components/native";

const Box = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.ivory_1};
  border-radius: ${({ borderRadius }) => borderRadius || 16}px;
  padding: 0 ${({ padding }) => padding || 24}px;
  width: ${({ width }) => width || "auto"}px;
  height: ${({ height }) => height || "auto"}px;
`;

const IvoryContainer = ({ width, height, borderRadius, padding, children }) => {
  return (
    <Box
      width={width}
      height={height}
      borderRadius={borderRadius}
      padding={padding}
    >
      {children}
    </Box>
  );
};

export default IvoryContainer;
