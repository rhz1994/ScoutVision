import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Articles() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "grow",
        height: "fit-content",
      }}
    >
      <Card sx={{ m: 2 }}>
        <CardMedia
          component="img"
          alt="Photo of "
          height="200"
          image="./src/assets/pexels-pixabay-39584.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Säkerhet på nätet
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Läs mer</Button>
        </CardActions>
      </Card>
      <Card sx={{ m: 2 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="./src/assets/pexels-thisisengineering-3861969.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Detta kännetecknar en bedragare:
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Läs mer</Button>
        </CardActions>
      </Card>
      <Card sx={{ m: 2 }}>
        <CardMedia
          component="img"
          alt="Photo of "
          height="200"
          image="./src/assets/pexels-pixabay-39584.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Så här kan du skydda dig mot
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Läs mer</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Articles;
