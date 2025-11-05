import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Profile() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const navigate = useNavigate();

  function deleteUser() {
    const proceed = prompt(
      `Användarnamn: ${user.username}
      Skriv ditt användarnamn om du vill fortsätta.`
    );
    if (proceed !== user.username) {
      return;
    }
    try {
      fetch(`/api/deleteUser/${user.id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setUser(null);
          setIsLoggedIn(false);
        });
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleEdit = (event) => {
    event.preventDefault();

    if (!username) {
      setSnackbar({
        open: true,
        message: "Användarnamn får inte vara tomt",
        severity: "error",
      });
      return;
    }

    fetch(`/api/update/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) =>
        res.json().then((data) => {
          if (!res.ok) {
            throw new Error(data.message || "Något gick fel");
          }
          return data;
        })
      )
      .then((data) => {
        setSnackbar({
          open: true,
          message: "Din profil uppdaterades!",
          severity: "success",
        });

        setUser((prev) => ({
          ...prev,
          username: data.data.username,
          password: data.data.password,
        }));

        setIsEditing(false);
        setPassword("");
      })
      .catch((error) => {
        setSnackbar({
          open: true,
          message: error.message,
          severity: "error",
        });
        console.error(error);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <h1>Hej, {user?.username || "user"}</h1>
      {isLoggedIn && (
        <Button variant="text" onClick={deleteUser} sx={{ mt: 1 }}>
          Ta bort användare
        </Button>
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Card sx={{ padding: 5, mb: 4 }}>
          <CardContent
            sx={{
              gap: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="div">
              Personliga uppgifter
            </Typography>

            {!isEditing ? (
              <>
                <Typography>
                  Användarnamn: {user ? user.username : ""}
                </Typography>
                <Typography>Lösenord: ********</Typography>
                <Button variant="outlined" onClick={() => setIsEditing(true)}>
                  Redigera profil
                </Button>
              </>
            ) : (
              <form onSubmit={handleEdit}>
                <TextField
                  required
                  label="Användarnamn"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  type="password"
                  label="Nytt lösenord"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                  Spara ändringar
                </Button>
                <Button
                  variant="text"
                  onClick={() => setIsEditing(false)}
                  sx={{ mt: 1 }}
                >
                  Avbryt
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <Card sx={{ padding: 5, mb: 4 }}>
          <CardContent sx={{ height: "100%" }}>
            <Typography variant="h5" component="div">
              Sparade tester
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Test1, Test2
            </Typography>
          </CardContent>
        </Card>
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

export default Profile;
