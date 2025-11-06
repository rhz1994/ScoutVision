import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

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
        Starta testet
      </Button>
    </section>
  );
}

export default Hero;
