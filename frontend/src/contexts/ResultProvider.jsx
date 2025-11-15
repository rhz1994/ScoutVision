import { ResultContext } from "./ResultContext";
import { useState } from "react";

function ResultProvider({ children }) {
  const [result, setResult] = useState([
    { question: 1, result: 1 },
    { question: 2, result: 1 },
    { question: 3, result: 1 },
    { question: 4, result: 1 },
    { question: 5, result: 1 },
  ]);
  const [totalScore, setTotalScore] = useState(null);

  const value = {
    result,
    setResult,
    totalScore,
    setTotalScore,
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
}

export default ResultProvider;
