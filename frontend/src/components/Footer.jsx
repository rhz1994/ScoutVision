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
            to={"terms-and-conditions"}
          >
            Användarvillkor
          </Link>
        </li>
        <li>Om webbplatsen</li>
      </ul>
    </footer>
  );
}
export default Footer;
