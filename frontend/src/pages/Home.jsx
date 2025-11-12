import Hero from "../components/Hero";
import Wall from "../components/Wall";
import Articles from "../components/Articles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Result from "../components/Result";
import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";

function Home() {
  const { result } = useContext(ResultContext);
  return (
    <>
      <Hero />
      {result && <Result />}
      <section style={{ display: "flex" }}>
        <Articles />
        <Wall />
      </section>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Viktiga länkar
        </Typography>
        <Link href="https://internetstiftelsen.se/" underline="hover">
          Internetstiftelsen
        </Link>
        <Link
          href="https://polisen.se/utsatt-for-brott/polisanmalan/bedrageri/bedragerier/annonsbedrageri/"
          underline="hover"
        >
          Polisen tips för internetbedrägerier
        </Link>
        <Link href="https://internetkunskap.se/" underline="hover">
          Internetkunskap
        </Link>
      </Box>
    </>
  );
}
export default Home;
