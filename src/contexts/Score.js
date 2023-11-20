import React, { useState, createContext } from "react";

const ScoreContext = createContext({
  score: null,
  dispatch: () => {},
});

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const dispatch = ({ inputScore }) => {
    setScore(inputScore);
  };

  const value = { score, dispatch };
  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContext, ScoreProvider };
