import { ResultContext } from "./ResultContext";
import { useState } from "react";

function ResultProvider({ children }) {
  const [result, setResult] = useState(null);
  console.log("result from context: ", result);

  const value = {
    result,
    setResult,
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
}

export default ResultProvider;
