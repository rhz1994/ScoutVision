import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import "./Hero.css";
import { useState } from "react";
import { Box } from "@mui/material";

function Hero() {
  const [displayStart, setDisplayStart] = useState("block");
  const [displayChoice, setDisplayChoice] = useState("none");
  const navigate = useNavigate();

  function handleClick() {
    setDisplayChoice("block");
    setDisplayStart("none");
  }

  return (
    <section className="primary-color hero-section">
      <div className="hero-div">
        <SafetyCheckIcon
          className="hero-child"
          color="primary"
          sx={{ fontSize: 100 }}
        />
        <p className="secondary-color hero-child" style={{ fontSize: "24px" }}>
          <span style={{ fontWeight: 700 }}>Trygghetskollen</span> hjälper dig
          att undvika eventuella bedrägeriförsök och ger tips på hur du kan
          skydda dig.
        </p>
      </div>
      <div style={{ display: displayStart }}>
        <Button
          onClick={handleClick}
          variant="contained"
          color="contrast"
          size="large"
          sx={{
            ":hover": { bgcolor: "contrast.light" },
            fontWeight: 600,
            padding: "20px",
          }}
        >
          Starta testet
        </Button>
      </div>

      <Box style={{ display: displayChoice }}>
        <Button
          onClick={() => navigate("/test/question=1")}
          variant="contained"
          color="contrast"
          size="large"
          sx={{
            ":hover": { bgcolor: "contrast.light" },
            fontWeight: 600,
            padding: "20px",
          }}
        >
          SMS
        </Button>
        <Button
          onClick={() => navigate("/testPhone/question=1")}
          variant="contained"
          color="contrast"
          size="large"
          sx={{
            ":hover": { bgcolor: "contrast.light" },
            fontWeight: 600,
            padding: "20px",
          }}
        >
          Telefon
        </Button>
      </Box>
    </section>
  );
}

export default Hero;
