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
  const [answers, setAnswers] = useState();
  const [checked, setChecked] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.value);
    setChecked(event.target.name);
    setAnswers(event.target.value);
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
                control={
                  <Checkbox
                    checked={checked === item.answer ? true : false}
                    name={item.answer}
                  />
                }
                labelPlacement="start"
                onChange={handleChange}
                label={item.answer}
                value={item.value}
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
