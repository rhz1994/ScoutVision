import "./Test.css";
import CheckboxCard from "../components/CheckboxCard";
import CircularProgress from "@mui/material/CircularProgress";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function TestPhone() {
  const { pathname } = useLocation();
  const questionNumber = pathname.split("=")[1] - 1;

  console.log("testphone");

  const { data, isPending, error } = useQuery({
    queryKey: ["questionsPhone"],
    staleTime: 1000 * 60 * 30,
    queryFn: () => fetch(`/api/testQuestionPhone`).then((r) => r.json()),
  });

  return (
    <div id="test-container" className="primary-color">
      {isPending && (
        <CircularProgress color="contrast" thickness={7} size={75} />
      )}
      {error && <span>Något gick fel med att hämta datan.</span>}

      {data && (
        <CheckboxCard
          key={data[questionNumber].id}
          question={data[questionNumber].question}
          id={data[questionNumber].id}
        />
      )}
    </div>
  );
}
export default TestPhone;
