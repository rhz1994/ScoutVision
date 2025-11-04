import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Profile() {
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState(user ? user.username : "user");
  const [editedUsername, setEditedUsername] = useState(false);

  const editUsername = (event) => {
    setEditedUsername(true);

    event.preventDefault;
    setUsername(username);

    console.log(username);
  };

  return (
    <>
      <h1>Hej, {user ? user.username : "user"}</h1>;
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
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="div">
              Personliga uppgifter
            </Typography>
            <form onSubmit={editUsername}>
              <TextField
                required
                disabled={editedUsername}
                label={"Användarnamn"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></TextField>
              <Button variant="contained" type="submit">
                Byt användarnamn
              </Button>
            </form>
            <TextField
              type="password"
              required
              label={"Lösenord"}
              defaultValue={user ? user.password : "lösenord"}
            ></TextField>{" "}
            <Button>Byt lösenord</Button>
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
    </>
  );
}
export default Profile;
