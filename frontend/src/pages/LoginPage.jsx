import { useState, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import LoginForm from "../components/LoginForm";

function LoginPage() {
  const { setUser } = useContext(UserContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="login-page">
      <LoginForm setUser={setUser} setSnackbar={setSnackbar} />

      <Typography
        variant="body2"
        sx={{ margin: 1, mb: 3, textAlign: "center" }}
      >
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
