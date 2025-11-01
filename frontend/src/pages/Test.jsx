import { useEffect, useState } from "react";
import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import CheckboxCard from "../components/CheckboxCard";

function Test() {
  const [testQuestions, setTestQuestions] = useState(null);

  useEffect(() => {
    fetch("/api/testQuestions")
      .then((responese) => responese.json())
      .then((result) => {
        return setTestQuestions(result[0]);
      });
  }, []);

  return (
    <div id="test-container">
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
