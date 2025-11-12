import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function Wall() {
  const [posts, setPosts] = useState([]);
  const [isPosting, setIsPosting] = useState(false);
  const [rating, setRating] = useState("");
  const [sender, setSender] = useState("");
  const [comment, setComment] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  useEffect(() => {
    fetch("/api/wallPosts/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [isPosting]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sender && comment && rating) {
      const res = await fetch("/api/wallPosts/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sender, comment, rating }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Något gick fel");

      setComment("");
      setSender("");
      setIsPosting(false);
      setSnackbar({
        open: true,
        message: "Du rapporterade avsändaren",
        severity: "success",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Alla fält måste fyllas i",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "600px",
          mx: "auto",
          p: 3,
          background: "linear-gradient(180deg, #fefefe, #f5f5f5)",
        }}
      >
        {!isPosting && (
          <>
            <Typography
              component="h1"
              variant="h6"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#E9DB5D",
                width: "fit-content",
                m: "auto",
                mb: 3,
                textAlign: "center",
              }}
            >
              Rapporterade bedrägerier
            </Typography>

            <Button
              variant="contained"
              sx={{
                display: "block",
                mx: "auto",
                mb: 3,
                color: "#000",
              }}
              onClick={() => setIsPosting(true)}
            >
              Rapportera själv
            </Button>

            {posts.length === 0 && (
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  mt: 4,
                }}
              >
                Inga rapporter ännu
              </Typography>
            )}

            {posts.map((post) => (
              <Card
                key={post.id}
                sx={{
                  m: 1,
                  p: 2,
                }}
              >
                {" "}
                <List>
                  <ListItem sx={{ p: 0, mb: 1 }}>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontWeight: "bold" }}>
                          Avsändare
                        </Typography>
                      }
                      secondary={post.phone_number}
                    />
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        bgcolor: post.severity,
                        ml: 1,
                      }}
                    />
                  </ListItem>
                </List>
                <Typography>{post.free_text}</Typography>
                <Typography>
                  {new Date(post.created_at).toLocaleDateString()}
                </Typography>
              </Card>
            ))}
          </>
        )}

        {isPosting && (
          <Card
            sx={{
              m: 2,
              p: 3,
              borderRadius: 3,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <CardContent
              sx={{ gap: 3, display: "flex", flexDirection: "column" }}
            >
              <form
                style={{ display: "flex", flexDirection: "column", gap: "1em" }}
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Avsändare"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                />
                <TextField
                  label="Kommentar"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  multiline
                  minRows={3}
                />
                <FormControl variant="filled" sx={{ minWidth: 120, p: 1 }}>
                  <InputLabel id="rate-sender-label">Risknivå</InputLabel>
                  <Select
                    labelId="rate-sender"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <MenuItem value={"yellow"}>🟡 Låg risk</MenuItem>
                    <MenuItem value={"orange"}>🟠 Medelrisk</MenuItem>
                    <MenuItem value={"red"}>🔴 Hög risk</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button type="submit" variant="contained">
                    Rapportera
                  </Button>
                  <Button variant="text" onClick={() => setIsPosting(false)}>
                    Avbryt
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        )}
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Wall;
