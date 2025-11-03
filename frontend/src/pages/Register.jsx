import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import MuiButton from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import "./Register.css";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleRegister = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setSnackbar({
        open: true,
        message: "Fyll i både användarnamn och lösenord",
        severity: "error",
      });
      return;
    }

    fetch("/api/users", {
      method: "POST",
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
          message: "Konto skapades!",
          severity: "success",
        });
        setTimeout(() => navigate("/login"), 1000);
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
    <div className="register-page">
      <Typography variant="h3" component="h1">
        Skapa konto
      </Typography>
      <form id="register-form" onSubmit={handleRegister}>
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
        <MuiButton variant="contained" type="submit">
          Skapa konto
        </MuiButton>
      </form> <div "skipToLoginContainer">
      <p> Redan medlem?</p>
      <MuiLink
        style={{ margin: "2em" }}
        component={Link}
        className="link"
        to="/login"
      >
        Logga in här istället.
      </MuiLink> </div>
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

export default RegisterPage;
