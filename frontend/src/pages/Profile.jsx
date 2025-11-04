import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Hej, {user ? user.username : "User"}</h1>;
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
