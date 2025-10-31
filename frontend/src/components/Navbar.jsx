import { Link, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import logo from "../assets/owl-svgrepo-com.svg";

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  console.log("isLoggedIn:", isLoggedIn);
  return (
    <header>
      <nav className="Navbar-nav">
        <Link className="Navbar-link-logo" to="/">
          <img className="Navbar-logo" src={logo} alt="logo" />
        </Link>

        <ul className="Navbar-ul">
          <li className="Navbar-li">
            <Link className="Navbar-link" to="/">
              Hem
            </Link>
          </li>

          <li className="Navbar-li">
            <Link className="Navbar-link" to="/test">
              Test
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
              <Login />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
