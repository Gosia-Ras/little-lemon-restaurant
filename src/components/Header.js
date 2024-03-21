import Nav from "./Nav";
import logo from "../assets/Logo.svg";
function Header() {
  return (
    <header>
      <div>
        <img src={logo} />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
