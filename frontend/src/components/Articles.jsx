import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Articles() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
        gap: 3,
        width: "100%",
      }}
    >
      <Card
        component="a"
        href="#"
        sx={{
          position: "relative",
          height: 400,
          color: "white",
          cursor: "pointer",
          "&:hover h6, &:hover p": { textDecoration: "underline" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('./src/assets/pexels-pixabay-39584.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "90%",
            p: 2,
          }}
        >
          <Typography
            className="hoverText"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Källkritik på nätet
          </Typography>
          <Typography className="hoverText" variant="body2">
            Internet är fyllt av information, men vad är sant och falskt?
            Källkritik handlar om att avgöra vad som är trovärdigt...
          </Typography>
        </CardContent>
      </Card>

      <Card
        component="a"
        href="#"
        sx={{
          position: "relative",
          height: 400,
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover h6, &:hover p": { textDecoration: "underline" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('./src/assets/pexels-thisisengineering-3861969.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "90%",
            p: 2,
          }}
        >
          <Typography
            className="hoverText"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            AI gör bedrägerier mer effektiva och trovärdiga
          </Typography>
          <Typography className="hoverText" variant="body2">
            Bedrägerier på nätet är inget nytt. Men med generativ AI har
            bedragare fått ett kraftfullt verktyg...
          </Typography>
        </CardContent>
      </Card>

      <Card
        component="a"
        href="#"
        sx={{
          position: "relative",
          height: 400,
          color: "white",
          cursor: "pointer",
          "&:hover h6, &:hover p": { textDecoration: "underline" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('./src/assets/pexels-joshsorenson-1714208.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "90%",
            p: 2,
          }}
        >
          <Typography
            className="hoverText"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Lösenordshanterare löser dina lösenordsproblem
          </Typography>
          <Typography className="hoverText" variant="body2">
            Lösenordshanterare hjälper dig att hantera dina inloggningar på ett
            säkert sätt...
          </Typography>
        </CardContent>
      </Card>
      <Card
        component="a"
        href="#"
        sx={{
          position: "relative",
          height: 400,
          color: "white",
          cursor: "pointer",
          "&:hover h6, &:hover p": { textDecoration: "underline" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('./src/assets/pexels-kevin-ku-92347-577585.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "90%",
            p: 2,
          }}
        >
          <Typography
            className="hoverText"
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            Så fungerar internet
          </Typography>
          <Typography className="hoverText" variant="body2">
            I Sverige använder de flesta internet varje dag, och vi tar för
            givet att det alltid ska funka. Men hur funkar egentligen tekniken
            bakom och vem är det som bestämmer över internet?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Articles;
