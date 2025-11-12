import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "./Hero.css";
import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";

function Hero() {
  const navigate = useNavigate();
  const { result, setResult } = useContext(ResultContext);

  function handleClick() {
    setResult(null);
    navigate("/test");
  }

  return (
    <section className="primary-color hero-section">
      <div className="hero-div">
        <SafetyCheckIcon
          className="hero-child"
          color="secondary"
          sx={{ fontSize: 100 }}
        />
        <p className="secondary-color hero-child" style={{ fontSize: "24px" }}>
          <span style={{ fontWeight: 700 }}>Trygghetskollen</span> hjälper dig
          att undvika eventuella bedrägeriförsök och ger tips på hur du kan
          skydda dig.
        </p>
      </div>
      <div>
        <Button
          onClick={handleClick}
          variant="contained"
          color="contrast"
          size="medium"
          sx={{
            ":hover": { bgcolor: "contrast.light" },
            fontWeight: 600,
            fontSize: "1em",
            padding: "15px",
          }}
        >
          {result > 0 ? "Testa igen" : "Starta test !"}
        </Button>
      </div>
    </section>
  );
}

export default Hero;
