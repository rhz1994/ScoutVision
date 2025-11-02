import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import CheckboxCard from "../components/CheckboxCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Test() {
  const { data } = useQuery({
    queryKey: ["questions"],
    staleTime: 1000 * 60 * 30,
    queryFn: () => fetch("/api/testQuestions2").then((r) => r.json()),
  });

  const { pathname } = useLocation();
  const questionNumber = pathname.split("=")[1] - 1;

  const answeralternative = [
    { id: 1, answer: "Ja", value: 3 },
    { id: 2, answer: "Nej", value: 1 },
    { id: 3, answer: "Osäker", value: 2 },
  ];

  return (
    <div id="test-container">
      <Stack>
        <Pagination count={5} />
      </Stack>
      {data && (
        <CheckboxCard
          key={data[questionNumber].id}
          question={data[questionNumber].question}
          answeralternative={answeralternative}
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
