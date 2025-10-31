import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import FormControl from "@mui/material/FormControl";

import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

function CheckboxCard(props) {
  const answerAlternatives = props.answeralternative.map((item) => item[0]);
  const [state, setState] = useState(answerAlternatives);

  const handleChange = (event, value) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    if (value) {
      console.log(event.target.value);
    }
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{props.question}</FormLabel>
          <FormGroup>
            {props.answeralternative.map((item) => (
              <FormControlLabel
                control={<Checkbox checked={item.id} name={item.id} />}
                labelPlacement="start"
                onChange={handleChange}
                label={item[0]}
                value={item[1]}
              />
            ))}
          </FormGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
export default CheckboxCard;
