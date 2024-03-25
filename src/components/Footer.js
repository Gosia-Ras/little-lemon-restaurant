import Nav from "./Nav";
import logo from "../assets/Logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <div>
        <h3>Navigation</h3>
        <Nav />
      </div>
      <div>
        <address>
          <h3>Contact Us</h3>
          <p>
            2385 Maldove Way
            <br />
            Chicaco, Illinois
            <br />
            (629)-234-6827
          </p>
          <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
        </address>
      </div>
      <div>
        <h3>Connect</h3>
        <ul>
          <li>
            {" "}
            <a href="#">Facebook</a>
          </li>
          <li>
            {" "}
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Join Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
