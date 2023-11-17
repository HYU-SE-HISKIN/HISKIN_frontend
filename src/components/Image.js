// ImageLinker.js
import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  align-self: center;
`;

const Image = ({ svgComponent }) => {
  return <Container>{svgComponent}</Container>;
};

export default Image;
