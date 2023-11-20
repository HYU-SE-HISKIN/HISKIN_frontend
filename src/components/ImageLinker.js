// ImageLinker.js
import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  align-self: center;
`;

const ImageLinker = ({ svgComponent, onPress }) => {
  return <Container onPress={onPress}>{svgComponent}</Container>;
};

ImageLinker.propTypes = {
  svgComponent: PropTypes.element.isRequired,
  onPress: PropTypes.func,
};

export default ImageLinker;
