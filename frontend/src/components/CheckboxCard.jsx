import { Card, CardContent, CardHeader, CircularProgress } from "@mui/material";
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
import { useQuery } from "@tanstack/react-query";

function CheckboxCard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [checked, setChecked] = useState(null);
  const { result, setResult } = useContext(ResultContext);
  const [value, setValue] = useState(0);
  const { user } = useContext(UserContext);
  const endpoint = pathname.split("number")[0];

  const { data, isPending, error } = useQuery({
    queryKey: [endpoint],
    staleTime: 1000 * 60 * 30,
    queryFn: () => fetch(`/api${endpoint}`).then((r) => r.json()),
  });

  const handleChange = (event) => {
    checked === event.target.name
      ? setChecked(null)
      : setChecked(event.target.name);

    setValue(event.target.value);
  };

  const questionNumber = parseInt(pathname.split("=")[1]);
  const questionIndex = parseInt(pathname.split("=")[1] - 1) || 0;

  function handleClick() {
    const testScore = result + parseInt(value);
    setResult(testScore);

    if (questionNumber < 5) {
      navigate(`${endpoint}number=${questionNumber + 1}`);
      setChecked(null);
    }
    if (questionNumber > 4) {
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

      navigate("/");
    }
  }

  const answeralternative = [
    { id: 1, answer: "Ja", value: 3 },
    { id: 2, answer: "Nej", value: 1 },
    { id: 3, answer: "Osäker", value: 2 },
  ];

  return (
    <Card variant="outlined" sx={{ width: "500px" }}>
      <CardContent>
        {error && <p>Något gick fel...</p>}
        {isPending && (
          <>
            <CircularProgress color="contrast" thickness={7} size={75} />
            <p>Hämtar frågorna</p>
          </>
        )}
        {data && (
          <>
            <CardHeader title={data[questionIndex].question} />
            <FormControl
              sx={{
                flexGrow: 1,
                display: "flex",

                justifyContent: "end",
                alignItems: "end",
                gap: 5,
              }}
            >
              <FormLabel
                id="check-buttons-group-label"
                sx={{
                  justifyContent: "center",

                  flexGrow: "1fr",
                  color: "black",
                  "&:focus": { color: "black" },
                }}
              >
                {`Fråga ${data[questionIndex].id} av 5`}
              </FormLabel>
              <FormGroup
                style={{
                  flexGrow: "1fr",
                  display: "flex",
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
          </>
        )}
      </CardContent>
    </Card>
  );
}
export default CheckboxCard;
