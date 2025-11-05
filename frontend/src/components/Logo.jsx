import { Link } from "react-router-dom";
import logo from "../assets/owl_24dp_BLACK_FILL0_wght400_GRAD0_opsz24.svg";
import "./Logo.css";

function Logo({ className }) {
  return (
    <div>
      <Link className="Navbar-link-logo logo-link" to="/">
        <img src={logo} alt="logo" id="logo" className={className} />
        <h1 className="logo-header">Trygghetskollen</h1>
      </Link>
    </div>
  );
}

export default Logo;
