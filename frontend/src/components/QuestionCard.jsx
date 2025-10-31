import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";

function QuestionCard(props) {
  console.log(props.question);
  console.log(props.answeralternative);
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{props.question}</FormLabel>

          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="1"
            value={value}
            name="radio-buttons-group"
          >
            {props.answeralternative.map((item) => (
              <FormControlLabel
                labelPlacement="start"
                value={item[1]}
                control={<Radio onChange={handleChange} />}
                label={item[0]}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
export default QuestionCard;
