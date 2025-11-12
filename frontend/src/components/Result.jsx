import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";
import "./Result.css";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

function Result() {
  const { result } = useContext(ResultContext);

  let content;
  if (result <= 5) {
    content = {
      style: "green",
      riskLevel: "Låg",
      content:
        "Det finns inget som direkt tyder på ett bedrägeri i detta fall. Meddelandet verkar sannolikt vara äkta, men det är ändå bra att vara försiktig. Undvik att klicka på länkar eller lämna personuppgifter om du är det minsta osäker.",
    };
  }

  if (result > 5 && result <= 10) {
    content = {
      style: "gold",
      riskLevel: "Medel",
      content:
        "Det finns vissa tecken som kan tyda på ett bedrägeriförsök. Tänk efter innan du gör något. Kontrollera alltid avsändaren, sök upp företaget på egen hand och ring deras officiella kundtjänst om du är osäker. Klicka inte på länkar förrän du är helt säker på att de är legitima.",
    };
  }

  if (result > 10 && result) {
    content = {
      style: "red",
      riskLevel: "Hög",
      content: `Meddelandet du fått har flera tydliga kännetecken på ett bedrägeriförsök. Klicka inte på några länkar, ring inte upp numret i meddelandet och lämna inte ut några uppgifter.
     Radera sms:et och kontakta banken eller företaget direkt via deras officiella kontaktvägar om du redan hunnit klicka eller lämna information.`,
      link: "https://telekomradgivarna.se/pressmeddelande/tillsammans-bekampar-vi-sms-bedragerier-med-ny-metod/",
    };
  }

  return (
    <div className="result-container">
      <Card sx={{ border: `1px solid black`, maxHeight: "185px" }}>
        <CardHeader title={`Resultat`} />
        <CardContent>
          <Typography>{`${result} av 15`}</Typography>
        </CardContent>
        <CardActions />
      </Card>
      <Card sx={{ border: `1px solid black`, maxHeight: "185px" }}>
        <CardHeader title={`Risknivå`} />
        <CardContent>
          <Typography
            sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
          >
            {`${content.riskLevel}`}{" "}
            <SafetyCheckIcon sx={{ color: content.style }} />
          </Typography>
        </CardContent>
        <CardActions />
      </Card>
      <Card sx={{ border: `1px solid black` }}>
        <CardHeader title={`Bedömning`} />
        <CardContent>
          <Typography>{`${content.content}`}</Typography>
          {content.link && (
            <>
              <span>Länk till: </span>
              <a href={content.link}>Telekområdgivarna</a>
              <Typography>
                Telekområdgivarna arrangerar ett gemensamt nummer dit du kan
                rapportera ditt sms till de stora telefonoperatörerna. Du
                vidarebefodrar sms:et till nummer 7726.
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions />
      </Card>
    </div>
  );
}
export default Result;
