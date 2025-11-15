import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer id="footer" className="footer">
      <ul>
        <li>
          <Link
            className="secondary-color"
            style={{ textDecoration: "none" }}
            to={"privacy-policy"}
            sx={{ mr: 2 }}
          >
            Integritetspolicy
          </Link>
        </li>
        <li>
          <Link
            className="secondary-color"
            style={{ textDecoration: "none" }}
            to={"terms-and-conditions"}
          >
            Användarvillkor
          </Link>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
