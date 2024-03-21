import Nav from "./Nav";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </footer>
  );
}

export default Footer;
