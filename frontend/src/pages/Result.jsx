import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import "./Result.css";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

function Result() {
  const { result, setResult } = useContext(ResultContext);
  const navigate = useNavigate();

  let content;
  if (result <= 5) {
    content = {
      style: "green",
      riskLevel: "låg",
      content:
        "Det finns inget som direkt tyder på ett bedrägeri i detta fall. Meddelandet verkar sannolikt vara äkta, men det är ändå bra att vara försiktig. Undvik att klicka på länkar eller lämna personuppgifter om du är det minsta osäker.",
    };
  }

  if (result > 5 && result <= 10) {
    content = {
      style: "yellow",
      riskLevel: "medel",
      content:
        "Det finns vissa tecken som kan tyda på ett bedrägeriförsök. Tänk efter innan du gör något. Kontrollera alltid avsändaren, sök upp företaget på egen hand och ring deras officiella kundtjänst om du är osäker. Klicka inte på länkar förrän du är helt säker på att de är legitima.",
    };
  }

  if (result > 10 && result) {
    content = {
      style: "red",
      riskLevel: "hög",
      content: `Meddelandet du fått har flera tydliga kännetecken på ett bedrägeriförsök. Klicka inte på några länkar, ring inte upp numret i meddelandet och lämna inte ut några uppgifter.
     Radera sms:et och kontakta banken eller företaget direkt via deras officiella kontaktvägar om du redan hunnit klicka eller lämna information.`,
      link: "https://telekomradgivarna.se/pressmeddelande/tillsammans-bekampar-vi-sms-bedragerier-med-ny-metod/",
    };
  }

  function handleClick() {
    setResult(0);
    navigate("/");
  }

  return (
    <div className="result-container primary-color">
      <Card sx={{ width: "500px", border: `4px solid ${content.style}` }}>
        <CardHeader title={`Resultatet visar ${content.riskLevel} risk.`} />
        <CardContent>
          <Typography>{content.content}</Typography>
          {content.link && (
            <>
              <span>Länk till: </span>
              <a href={content.link}>Telekområdgivarna</a>
              <Typography>
                Telekområdgivarna arrangerar ett gemensamt nummer dit du kan
                rapportera ditt sms till de stora telefonoperatörerna. Du
                vidarebefodrar sms:et till nummer 7725.
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions
          children={
            <Button variant="contained" color="contrast" onClick={handleClick}>
              Lär dig mer {">>"}
            </Button>
          }
        />
      </Card>
    </div>
  );
}
export default Result;
