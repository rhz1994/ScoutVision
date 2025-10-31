import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import MuiButton from "@mui/material/Button";

import "./LoginPage.css";

function LoginPage() {
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("/api/users")
      .then((responese) => responese.json())
      .then((users) => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          setIsLoggedIn(true);
          navigate("/profile");
        } else {
          alert("Fel användarnamn eller lösenord");
        }
      });
  };

  return (
    <div className="login-page">
      <h1>Logga in</h1>
      <form id="loginForm">
        <label htmlFor="username">
          Användarnamn
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Användarnamn"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          Lösenord
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Lösenord"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <MuiButton variant="contained" type="submit" onClick={handleLogin}>
          Logga in
        </MuiButton>
      </form>
      <Link className="Navbar-link" to="/register">
        Inte medlem? Skapa konto istället.
      </Link>
    </div>
  );
}

export default LoginPage;
