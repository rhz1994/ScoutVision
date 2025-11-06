// import { useContext } from "react";
// import { UserContext } from "../contexts/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Login() {
  //   const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <AccountCircleIcon className="login-button">Logga in</AccountCircleIcon>
  );
}

export default Login;
