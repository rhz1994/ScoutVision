import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

function Result() {
  const { result, setResult } = useContext(ResultContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  // const { data, isPending, error } = useQuery({
  //   queryKey: ["questions"],
  //   staleTime: 1000 * 60 * 30,
  //   queryFn: () => fetch("/api/testQuestions2").then((result) => result.json()),
  // });

  let style;
  let content;
  if (result <= 5) {
    style = "green";
    content =
      "Det finns inget som direkt tyder på ett bedrägeri i detta fall. Meddelandet verkar sannolikt vara äkta, men det är ändå bra att vara försiktig. Undvik att klicka på länkar eller lämna personuppgifter om du är det minsta osäker.";
  }

  if (result > 5 && result <= 10) {
    style = "yellow";
    content =
      "Det finns vissa tecken som kan tyda på ett bedrägeriförsök. Tänk efter innan du gör något. Kontrollera alltid avsändaren, sök upp företaget på egen hand och ring deras officiella kundtjänst om du är osäker. Klicka inte på länkar förrän du är helt säker på att de är legitima.";
  }

  if (result > 10 && result) {
    style = "red";
    content =
      "Meddelandet du fått har flera tydliga kännetecken på ett bedrägeriförsök. Klicka inte på några länkar, ring inte upp numret i meddelandet och lämna inte ut några uppgifter. Radera sms:et och kontakta banken eller företaget direkt via deras officiella kontaktvägar om du redan hunnit klicka eller lämna information.";
  }

  function handleClick() {
    setResult(0);
    navigate("/");
  }

  return (
    <div className="result-container">
      <Card sx={{ width: "500px", border: `4px solid ${style}` }}>
        <CardHeader title={`Hej, ${user ? user.username : "user"}`} />
        <CardContent>
          <Typography>Du fick {result} poäng på ditt test</Typography>
          <Typography>{content}</Typography>
        </CardContent>
        <CardActions
          children={
            <Button variant="contained" color="contrast" onClick={handleClick}>
              Gå vidare
            </Button>
          }
        />
      </Card>
    </div>
  );
}
export default Result;
