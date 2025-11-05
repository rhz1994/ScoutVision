import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Logo from "./Logo";
import { UserContext } from "../contexts/UserContext";
import { useLocation, useParams } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

import "./Navbar.css";

function Navbar() {
  const { pathname } = useLocation();
  const { question } = useParams();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
    setUser(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link className="Navbar-link-logo" to="/">
          <Logo className="Navbar-logo" />
        </Link>
        <span>{pathname}</span>
        <span>{question}</span>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button color="secondary" component={Link} to="/">
            Home
          </Button>
          <Button color="secondary" component={Link} to="/test/question=1">
            Test
          </Button>

          <Button color="secondary" component={Link} to="/result">
            Resultat
          </Button>
        </Box>

        {isLoggedIn ? (
          <>
            <Button color="secondary" component={Link} to="/profile">
              Profil
            </Button>
            <Button color="secondary" onClick={handleLogout}>
              Logga ut
            </Button>
          </>
        ) : (
          <Button color="secondary" component={Link} to="/login">
            Logga in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
