import { useEffect, useState } from "react";
import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import CheckboxCard from "../components/CheckboxCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

import { useLocation } from "react-router-dom";

function Test() {
  const [testQuestions, setTestQuestions] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    const questionNumber = pathname.split("=")[1] - 1;
    console.log(questionNumber);
    fetch("/api/testQuestions")
      .then((responese) => responese.json())
      .then((result) => {
        return setTestQuestions(result[questionNumber]);
      });
  }, [pathname]);

  return (
    <div id="test-container">
      <Stack>
        <Pagination count={5} />
      </Stack>
      {testQuestions && (
        <CheckboxCard
          question={testQuestions.question}
          answeralternative={testQuestions.answeralternative}
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
