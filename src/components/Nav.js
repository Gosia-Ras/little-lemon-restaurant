import "../styles/Nav.css";

function Nav() {
  const handleBasket = (e) => {
    e.preventDefault();
    alert("Delivery function not implemented yet :)");
  };
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
          <button onClick={handleBasket}>Place an order</button>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
