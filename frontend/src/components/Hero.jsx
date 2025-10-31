import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";

function Hero() {
  return (
    <section style={{ display: "flex", border: "1px solid white" }}>
      <SafetyCheckIcon color="secondary" fontSize="large" />
      <p>
        Trygghetskollen är ett enkelt sätt att testa om du har varit med om ett
        bedrägeriförsök och få tips om hur du undviker att bli lurad av
        bedragarna.
      </p>
    </section>
  );
}

export default Hero;
