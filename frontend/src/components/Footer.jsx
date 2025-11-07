import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer id="footer" className="footer">
      <ul>
        <li>
          <Link to={"terms-and-conditions"}>Användarvillkor</Link>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
