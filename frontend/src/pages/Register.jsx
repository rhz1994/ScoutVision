import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import MuiButton from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
  const [acceptTerms, setAcceptTerms] = useState(false);

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

    if (!acceptTerms) {
      setSnackbar({
        open: true,
        message: "Du måste godkänna villkoren för att fortsätta",
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
        <MuiButton variant="contained" type="submit" disabled={!acceptTerms}>
          Skapa konto
        </MuiButton>
      </form>

      <div className="termsRow">
        <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
          Jag godkänner att mina uppgifter behandlas enligt
          <MuiLink
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener"
            sx={{ ml: 0.5 }}
          >
            integritetspolicyn.
          </MuiLink>
        </Typography>
        <Checkbox
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
      </div>

      <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
        Redan medlem?
        <MuiLink href="/login" target="_blank" rel="noopener" sx={{ ml: 0.5 }}>
          Logga in här istället.
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

export default RegisterPage;
