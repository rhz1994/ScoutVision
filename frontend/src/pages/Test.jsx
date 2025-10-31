import { useEffect, useState } from "react";
import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import Button from "../components/Button";
import CheckboxCard from "../components/CheckboxCard";

function Test() {
  const [testQuestions, setTestQuestions] = useState(null);
  useEffect(() => {
    fetch("/api/testQuestions")
      .then((responese) => responese.json())
      .then((result) => setTestQuestions(result));
  }, []);
  return (
    <div id="test-container">
      {testQuestions &&
        testQuestions.map((testQuestion) => (
          <CheckboxCard
            question={testQuestion.question}
            answeralternative={testQuestion.answeralternative}
          />
        ))}
      {testQuestions &&
        testQuestions.map((testQuestion) => (
          <QuestionCard
            question={testQuestion.question}
            answeralternative={testQuestion.answeralternative}
          />
        ))}

      {/* <QuestionCard label="Second Question" />
      <QuestionCard label="Third Question" />
      <QuestionCard label="Fourth Question" />
      <QuestionCard label="Fifth Question" /> */}
    </div>
  );
}
export default Test;
