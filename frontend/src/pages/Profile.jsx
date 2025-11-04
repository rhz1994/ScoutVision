import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Hej, {user.username}</h1>;
      <Card id="userInfoContainer">
        <CardContent>Användarinfo</CardContent>
      </Card>
      <Card id="savedResults">
        <CardContent>Tidigare test</CardContent>
      </Card>
    </>
  );
}
export default Profile;
