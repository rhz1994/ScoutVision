import Hero from "../components/Hero";
import Button from "@mui/material/Button";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import { Link } from "react-router-dom";

function Home() {
  function handleClick() {}
  return (
    <div
      className="primary-color"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        minHeight: "50vh",
        padding: "2rem",
      }}
    >
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,

          padding: 40,
        }}
      >
        <SafetyCheckIcon color="secondary" sx={{ fontSize: 100 }} />
        <p className="secondary-color" style={{ fontSize: "24px" }}>
          <span style={{ fontWeight: 700 }}>Trygghetskollen</span> hjälper dig
          att undvika eventuella bedrägeriförsök och ger tips på hur du kan
          skydda dig.
        </p>
      </section>
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
    </div>
  );
}
export default Home;
