import React from "react";

const HorizontalContainer = ({ component1, component2 }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>{component1}</div>
      <div style={{ flex: 1 }}>{component2}</div>
    </div>
  );
};

export default HorizontalContainer;
