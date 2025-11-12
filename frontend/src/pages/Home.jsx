import Hero from "../components/Hero";
import Wall from "../components/Wall";
import Articles from "../components/Articles";
import Box from "@mui/material/Box";
import ImportantLinks from "../components/ImportantLinks";

function Home() {
  return (
    <>
      <Hero />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: 3,
          mt: 5,
        }}
      >
        <Box>
          <Box>
            <Articles />
            <ImportantLinks />
          </Box>
        </Box>

        <Box>
          <Wall />
        </Box>
      </Box>
    </>
  );
}

export default Home;
