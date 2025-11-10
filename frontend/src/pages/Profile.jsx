import { useContext, useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ProfileForm = lazy(() => import("../components/ProfileForm"));
const TestResultsList = lazy(() => import("../components/TestResultsList"));
const DeleteDialog = lazy(() => import("../components/DeleteDialog"));

function Profile() {
  const { user, setUser, isLoggedIn } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  // const { data, isPending } = useQuery({
  //   queryKey: ["testResults"],
  //   queryFn: () =>
  //     fetch(`/api/testResults/${user.id}`).then((result) => result.json()),
  // });

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const handleDeleteClick = () => setOpenDeleteDialog(true);
  const handleCancelDelete = () => setOpenDeleteDialog(false);

  const deleteProfile = () => {
    fetch(`/api/users/${user.id}`, { method: "DELETE" })
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
      .catch((err) =>
        setSnackbar({ open: true, message: err.message, severity: "error" })
      );
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 2,
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Card sx={{ padding: 5, mb: 4 }}>
          <CardContent
            sx={{ gap: 3, display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h5">Personliga uppgifter</Typography>
            {!isEditing ? (
              <>
                <Typography>Användarnamn: {user && user.username}</Typography>
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
              <Suspense fallback={<div>Laddar formulär...</div>}>
                <ProfileForm
                  user={user}
                  setUser={setUser}
                  setIsEditing={setIsEditing}
                  setSnackbar={setSnackbar}
                />
              </Suspense>
            )}
          </CardContent>
        </Card>
        <Suspense fallback={<Typography>Laddar resultat...</Typography>}>
          <TestResultsList />
        </Suspense>
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

      <DeleteDialog
        open={openDeleteDialog}
        onCancel={handleCancelDelete}
        onDelete={deleteProfile}
      />
    </>
  );
}

export default Profile;
