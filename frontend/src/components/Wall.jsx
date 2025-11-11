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
        console.log(data);
      });
  }, []);

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

      setIsPosting(false);
      setSnackbar({
        open: true,
        message: "Inlägget skickades!",
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
      <Box sx={{ maxWidth: "500px" }}>
        {posts && posts.length > 0 && !isPosting && (
          <Card sx={{ m: 2 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Typography component={"h1"} sx={{ mb: 1 }}>
                Rapporterade bedrägerier
              </Typography>
              <Button
                variant="contained"
                label={" Rapportera ett misstänkt bedrägeri"}
                sx={{
                  width: "fit-content",
                }}
                onClick={() => setIsPosting(true)}
              >
                Rapportera själv
              </Button>
              {posts.map((post) => (
                <List
                  key={post.id}
                  sx={{
                    borderBottom: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    p: 0,
                    m: 0,
                  }}
                >
                  <ListItem sx={{ pt: 0, pb: 0 }}>
                    <ListItemText
                      primary="Avsändare"
                      secondary={post.phone_number}
                    />
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        bgcolor: post.severity,
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ pt: 0, pb: 0 }}>
                    <ListItemText primary="Info:" secondary={post.free_text} />
                  </ListItem>
                  <ListItem sx={{ pt: 0, pb: 0 }}>
                    <ListItemText
                      primary="Datum:"
                      secondary={post.created_at}
                    />
                  </ListItem>
                </List>
              ))}
            </CardContent>
          </Card>
        )}
        {isPosting && (
          <Card sx={{ m: 2 }}>
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
                />
                <FormControl variant="filled" sx={{ minWidth: 50, p: 1 }}>
                  <InputLabel id="rate-sender-label">Risknivå</InputLabel>
                  <Select
                    labelId="rate-sender"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <MenuItem value={"green"}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: "green",
                        }}
                      />
                    </MenuItem>
                    <MenuItem value={"yellow"}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: "yellow",
                        }}
                      />
                    </MenuItem>
                    <MenuItem value={"red"}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: "red",
                        }}
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button type="submit" variant="contained">
                  Rapportera
                </Button>
                <Button variant="text" onClick={() => setIsPosting(false)}>
                  Avbryt
                </Button>
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
