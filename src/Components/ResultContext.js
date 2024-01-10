import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const resultValues = {
    input,
    setInput,
  };

  return (
    <ResultContext.Provider value={resultValues}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => {
  const context = useContext(ResultContext);
  if (!context) {
    throw new Error("useResultContext must be used within a ResultProvider");
  }
  return context;
};

export default ResultContext;
