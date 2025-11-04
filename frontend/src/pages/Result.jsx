import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import "./Result.css";
import { useNavigate } from "react-router-dom";

function Result() {
  const { result, setResult } = useContext(ResultContext);
  const navigate = useNavigate();

  // const { data, isPending, error } = useQuery({
  //   queryKey: ["questions"],
  //   staleTime: 1000 * 60 * 30,
  //   queryFn: () => fetch("/api/testQuestions2").then((result) => result.json()),
  // });

  let style;
  if (result <= 5) {
    style = "normal";
  }

  if (result > 5 && result <= 10) {
    style = "warning";
  }

  if (result > 10 && result) {
    style = "danger";
  }

  function handleClick() {
    setResult(0);
    navigate("/");
  }

  return (
    <div className="result-container">
      <div className={style}>Du fick {result} poäng på ditt test</div>
      <button onClick={handleClick}>Gå vidare</button>
    </div>
  );
}
export default Result;
