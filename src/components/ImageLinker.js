import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  align-self: center;
  margin-bottom: 30px;
`;
const StyledImage = styled.Image`
  background-color: ${({ theme }) => theme.imageBackground};
  width: 100px;
  height: 100px;
  border-radius: ${({ rounded }) => (rounded ? "50px" : "0px")};
`;

const ImageLinker = ({ url, imageStyle, rounded, onPress }) => {
  return (
    <Container>
      <StyledImage
        source={{ uri: url }}
        style={imageStyle}
        rounded={rounded}
        onPress={onPress}
      />
    </Container>
  );
};

ImageLinker.defaultProps = {
  rounded: false,
};

ImageLinker.propTypes = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
  rounded: PropTypes.bool,
};

export default ImageLinker;
