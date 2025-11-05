import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user?.username || "user");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(user?.username || "user");
  }, [user]);

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
      .then((result) =>
        result.json().then((data) => {
          if (!result.ok) {
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

  const handleDeleteClick = () => {
    setOpenDeleteDialog(true);
  };

  const deleteProfile = () => {
    fetch(`/api/users/${user.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Något gick fel vid borttagning");
        setUser(null);
        setSnackbar({
          open: true,
          message: "Profilen raderades!",
          severity: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setSnackbar({
          open: true,
          message: error.message,
          severity: "error",
        });
      });
    setOpenDeleteDialog(false);
  };

  const handleCancelDelete = () => {
    setOpenDeleteDialog(false);
  };

  useEffect(() => {
    fetch(`/api/testResults/${user.id}`, { method: "GET" })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);

        setTestResults(data);
        console.log(testResults);
      });
  }, [user]);

  return (
    <>
      <h1>Hej, {user ? user.username : "user"}</h1>
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
                <Typography>Användarnamn: {username}</Typography>
                <Typography>Lösenord: ********</Typography>
                <Button variant="outlined" onClick={() => setIsEditing(true)}>
                  Redigera profil
                </Button>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={handleDeleteClick}
                >
                  Ta bort profil
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
            <List>
              {testResults.length > 0 ? (
                testResults.map((result) => (
                  <ListItem key={result.id}>
                    <ListItemText
                      primary={result.testName || `Test ${result.id}`}
                      secondary={
                        <span>
                          <span>
                            <strong>Resultat:</strong> {result.result}
                          </span>
                          <br />
                          <span>
                            <strong>Telefonnummer:</strong>
                            {result.suspect_details}
                          </span>
                          <br />
                          <span>
                            <strong>Datum:</strong> {result.created_at}
                          </span>
                          <br />
                        </span>
                      }
                    />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Inga sparade resultat
                </Typography>
              )}
            </List>
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

      <Dialog open={openDeleteDialog} onClose={handleCancelDelete}>
        <DialogTitle>Bekräfta borttagning</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Är du säker på att du vill ta bort din profil?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Avbryt</Button>
          <Button onClick={deleteProfile} color="error" variant="contained">
            Ta bort
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Profile;
