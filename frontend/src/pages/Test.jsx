import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import CheckboxCard from "../components/CheckboxCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ResultContext } from "../contexts/ResultContext";

function Test() {
  const { pathname } = useLocation();

  const { data, isPending, error } = useQuery({
    queryKey: ["questions"],
    staleTime: 1000 * 60 * 30,
    queryFn: () => fetch("/api/testQuestions2").then((r) => r.json()),
  });

  const questionNumber = pathname.split("=")[1] - 1;

  return (
    <div id="test-container" className="primary-color">
      {/* <Stack>
        <Pagination count={5} />
      </Stack> */}
      {isPending && <CircularProgress />}
      {error && <span>Något gick fel med att hämta datan.</span>}
      {data && (
        <CheckboxCard
          key={data[questionNumber].id}
          question={data[questionNumber].question}
        />
      )}

      {/* {testQuestions &&
        testQuestions.map((testQuestion) => (
          <CheckboxCard
            key={testQuestion.id}
            question={testQuestion.question}
            answeralternative={testQuestion.answeralternative}
          />
        ))} */}
      {/* {testQuestions &&
        testQuestions.map((testQuestion) => (
          <QuestionCard
            key={testQuestion.id}
            question={testQuestion.question}
            answeralternative={testQuestion.answeralternative}
          />
        ))} */}
    </div>
  );
}
export default Test;
