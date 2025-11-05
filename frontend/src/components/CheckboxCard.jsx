import { Card, CardContent, CardHeader } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { ResultContext } from "../contexts/ResultContext";
import { UserContext } from "../contexts/UserContext";

function CheckboxCard(props) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [checked, setChecked] = useState(null);
  const { result, setResult } = useContext(ResultContext);
  const [value, setValue] = useState(0);
  const { user } = useContext(UserContext);

  const handleChange = (event) => {
    checked === event.target.name
      ? setChecked(null)
      : setChecked(event.target.name);

    setValue(event.target.value);
  };

  const questionNumber = parseInt(pathname.split("=")[1]) + 1;

  function handleClick() {
    // setResult(result + parseInt(value));
    const testScore = result + parseInt(value);
    setResult(testScore);

    if (questionNumber < 6) {
      navigate(`/test/question=${questionNumber}`);
    }
    if (questionNumber > 5) {
      // const result = { question: props.question, answers: answers };
      // console.log(result);
      if (user) {
        fetch(`/api/testResult/${user.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ result: testScore }),
        })
          .then((response) => response.json())
          .then((result) => console.log(result));
      }

      navigate("/result");
    }
    // navigate(
    //   questionNumber < 6 ? `/test/question=${questionNumber}` : `/result`
    // );
  }

  const answeralternative = [
    { id: 1, answer: "Ja", value: 3 },
    { id: 2, answer: "Nej", value: 1 },
    { id: 3, answer: "Osäker", value: 2 },
  ];

  return (
    <Card variant="outlined" sx={{ width: "500px" }}>
      <CardContent>
        <CardHeader title={props.question} />
        <FormControl
          sx={{
            // backgroundColor: "red",
            flexGrow: 1,
            display: "flex",
            // gridTemplateRows: "1fr 1fr auto",
            justifyContent: "end",
            alignItems: "end",
            gap: 5,
          }}
        >
          <FormLabel
            id="check-buttons-group-label"
            sx={{
              justifyContent: "center",

              // textAlign: "end",
              flexGrow: "1fr",
              color: "black",
              "&:focus": { color: "black" },
            }}
          >
            {`Fråga ${props.id} av 5`}
          </FormLabel>
          <FormGroup
            style={{
              flexGrow: "1fr",
              display: "flex",
              // minWidth: "200px",
              // border: "1px solid black",
            }}
          >
            {answeralternative.map((item) => (
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
            disabled={!checked}
            variant="contained"
            color="contrast"
            size="medium"
            sx={{
              ":hover": { bgcolor: "contrast.light" },
              fontWeight: 600,
              padding: "10px",
              flexGrow: "auto",
              minWidth: "125px",
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
