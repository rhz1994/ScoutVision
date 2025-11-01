import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  function handleClick() {}
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
      <Link to="/test">
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
      </Link>
    </section>
  );
}

export default Hero;
