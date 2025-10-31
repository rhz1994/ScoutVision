import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import Button from "../components/Button";

function Test() {
  return (
    <div id="test-container">
      <Button>SMS</Button>
      <Button>Telefon</Button>
      <Button>Länk</Button>

      <QuestionCard question={question} label="First Question" />
      <QuestionCard label="Second Question" />
      <QuestionCard label="Third Question" />
      <QuestionCard label="Fourth Question" />
      <QuestionCard label="Fifth Question" />
    </div>
  );
}
export default Test;
