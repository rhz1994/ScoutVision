import { useState, lazy, Suspense } from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const RegisterForm = lazy(() => import("../components/RegisterForm"));

export default function RegisterPage() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
    <div className="register-page">
      <Suspense fallback={<div>Laddar formulär...</div>}>
        <RegisterForm setSnackbar={setSnackbar} />
      </Suspense>

      <Typography
        variant="body2"
        sx={{ margin: 1, mb: 3, textAlign: "center" }}
      >
        Redan medlem?
        <MuiLink component={Link} to="/login" sx={{ ml: 0.5 }}>
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
