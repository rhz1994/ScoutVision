import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

function CheckboxCard(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const answerAlternatives = props.answeralternative.map((item) => item[0]);
  const [state, setState] = useState(answerAlternatives);
  const [answers, setAnswers] = useState([]);

  const handleChange = (event, value) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    if (!value) {
      const updatedArray = answers.filter(
        (item) => item !== event.target.value
      );
      setAnswers(updatedArray);
    }
    if (value) {
      setAnswers([...answers, event.target.value]);
    }
  };

  const questionNumber = parseInt(pathname.split("=")[1]) + 1;
  function handleClick() {
    console.log(answers);

    // const result = { question: props.question, answers: answers };
    // console.log(result);
    // fetch("/api/post/3", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(result),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result));
    navigate(
      questionNumber < 6
        ? `/test/question=${questionNumber}`
        : `/test/question=1`
    );
  }
  return (
    <Card variant="outlined">
      <CardContent>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{props.question}</FormLabel>
          <FormGroup>
            {props.answeralternative.map((item) => (
              <FormControlLabel
                key={item.id}
                control={<Checkbox checked={item.id} name={item.id} />}
                labelPlacement="start"
                onChange={handleChange}
                label={item[0]}
                value={item[1]}
              />
            ))}
          </FormGroup>

          <Button
            onClick={handleClick}
            variant="contained"
            color="contrast"
            size="medium"
            sx={{
              ":hover": { bgcolor: "contrast.light" },
              fontWeight: 600,
              padding: "10px",
            }}
          >
            Nästa
          </Button>
        </FormControl>
      </CardContent>
    </Card>
  );
}
export default CheckboxCard;
