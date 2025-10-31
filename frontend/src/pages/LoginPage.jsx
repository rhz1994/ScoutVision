import Login from "../components/Login";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  // const handleLogin = () => {

  // }

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
          />
        </label>
        <label htmlFor="password">
          Lösenord
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Lösenord"
          />
        </label>
        {/* <button onClick={handleLogin}>Logga in</button> */}
      </form>
      <Link className="Navbar-link" to="/register">
        Skapa konto
      </Link>
    </div>
  );
}

export default LoginPage;
