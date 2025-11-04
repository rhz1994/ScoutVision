import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Logo from "./Logo";
import { UserContext } from "../contexts/UserContext";
import { useLocation, useParams } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const { pathname } = useLocation();
  const { question } = useParams();

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  // console.log("isLoggedIn:", isLoggedIn);
  return (
    <header>
      <nav className="Navbar-nav">
        <Link className="Navbar-link-logo" to="/">
          <Logo className="Navbar-logo" />
        </Link>
        <span>{pathname}</span>
        <span>{question}</span>

        <ul className="Navbar-ul">
          <li className="Navbar-li">
            <Link className="Navbar-link" to="/">
              Hem
            </Link>
          </li>

          <li className="Navbar-li">
            <Link className="Navbar-link" to="/test/question=1">
              Test
            </Link>
          </li>

          <li className="Navbar-li">
            <Link className="Navbar-link" to="/result">
              Resultat
            </Link>
          </li>

          <li className="Navbar-li">
            {isLoggedIn ? (
              <>
                <Link className="Navbar-link" to="/profile">
                  Profil
                </Link>
                <button onClick={handleLogout}>Logga ut</button>
              </>
            ) : (
              <Link className="Navbar-link" to="/login">
                <Login />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
