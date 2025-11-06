import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
    <AppBar sx={{ mb: "3em" }} position="static" color="secondary">
      <Toolbar>
        <Logo component={Link} to="/" className="Navbar-logo" />
        <span>{pathname}</span>
        <span>{question}</span>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button color="primary" component={Link} to="/">
            Hem
          </Button>
          <Button color="primary" component={Link} to="/test/question=1">
            Test
          </Button>

          <Button color="primary" component={Link} to="/result">
            Resultat
          </Button>
        </Box>

        {isLoggedIn ? (
          <>
            <Button color="primary" component={Link} to="/profile">
              Profil
            </Button>
            <Button color="primary" onClick={handleLogout}>
              Logga ut
            </Button>
          </>
        ) : (
          <Link to="/login">
            <AccountCircleIcon
              color="contrast"
              sx={{ width: "2em", height: "2em" }}
            />
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
