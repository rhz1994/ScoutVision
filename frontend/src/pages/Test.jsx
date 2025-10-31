import { useEffect, useState } from "react";
import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import Button from "../components/Button";

function Test() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("/api/users")
      .then((responese) => responese.json())
      .then((result) => setUsers(result));
  }, []);
  return (
    <div id="test-container">
      <Button>SMS</Button>
      <Button>Telefon</Button>
      <Button>Länk</Button>
      {users && <QuestionCard question={users[0]} label="First Question" />}

      {/* <QuestionCard label="Second Question" />
      <QuestionCard label="Third Question" />
      <QuestionCard label="Fourth Question" />
      <QuestionCard label="Fifth Question" /> */}
    </div>
  );
}
export default Test;
