import React from "react";
import PropTypes from "prop-types";

const VerticalContainer = ({ component1, component2 }) => {
  return (
    <div className="vertical-container">
      <div className="component1-container">{component1}</div>
      <div className="component2-container">{component2}</div>
    </div>
  );
};

VerticalContainer.propTypes = {
  component1: PropTypes.element.isRequired,
  component2: PropTypes.element.isRequired,
};

export default VerticalContainer;
