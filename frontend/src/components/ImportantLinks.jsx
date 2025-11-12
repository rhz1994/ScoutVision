import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function ImportantLinks() {
  return (
    <Card sx={{ p: 2, mt: 5 }}>
      <CardContent>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Viktiga länkar
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
          }}
        >
          <Link
            href="https://internetstiftelsen.se/"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Internetstiftelsen
          </Link>
          <Link
            href="https://polisen.se/utsatt-for-brott/polisanmalan/bedrageri/bedragerier/annonsbedrageri/"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polisen: tips för internetbedrägerier
          </Link>
          <Link
            href="https://internetkunskap.se/"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Internetkunskap
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ImportantLinks;
