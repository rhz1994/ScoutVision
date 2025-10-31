import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (
    <button className="login-button" onClick={() => setIsLoggedIn(true)}>
      Logga in
    </button>
  );
}

export default Login;
