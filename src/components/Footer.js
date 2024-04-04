import Nav from "./Nav";
import logo from "../assets/Logo.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <img src={logo} alt="Little Lemon Logo" />
      <div className="nav">
        <h3>Navigation</h3>
        <Nav />
      </div>
      <div className="address">
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
      <div className="connect">
        <h3>Connect</h3>
        <ul>
          <li>
            {" "}
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            {" "}
            <a href="https://www.instagram.com">Instagram</a>
          </li>
          <li>
            <a href="/booking-details">Join Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
