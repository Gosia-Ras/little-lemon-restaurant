import "../styles/Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="/booking">Reserve a table</a>
        </li>
        <li>
          <a href="/delivery">Place an order</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
