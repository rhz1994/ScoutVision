import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import MuiButton from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import "./LoginPage.css";

function LoginPage() {
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleLogin = (event) => {
    event.preventDefault();

    fetch("/api/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );

        if (user) {
          setIsLoggedIn(true);
          setSnackbar({
            open: true,
            message: "Inloggning lyckades!",
            severity: "success",
          });
          setTimeout(() => navigate("/profile"), 1000);
        } else {
          setSnackbar({
            open: true,
            message: "Fel användarnamn eller lösenord",
            severity: "error",
          });
        }
      })
      .catch((error) => {
        setSnackbar({
          open: true,
          message: "Ett fel uppstod, försök igen",
          severity: "error",
        });
        console.error(error);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="login-page">
      <Typography variant="h3" component="h1">
        Logga in
      </Typography>
      <form id="login-form" onSubmit={handleLogin}>
        <TextField
          label="Användarnamn"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Lösenord"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MuiButton
          variant="contained"
          type="submit"
          disabled={username.length === 0 || password.length === 0}
        >
          Logga in
        </MuiButton>
      </form>

      <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
        Inte medlem?
        <MuiLink component={Link} to="/register" sx={{ ml: 0.5 }}>
          Skapa konto här istället.
        </MuiLink>
      </Typography>
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
    </div>
  );
}

export default LoginPage;
