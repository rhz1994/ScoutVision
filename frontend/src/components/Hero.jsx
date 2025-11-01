import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Hero() {
  function handleClick() {}
  return (
    <section
      className="primary-color"
      style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "350px",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "800px",
          // border: "3px solid white",
        }}
      >
        <SafetyCheckIcon color="secondary" sx={{ fontSize: 100 }} />
        <p className="secondary-color" style={{ fontSize: "24px" }}>
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
