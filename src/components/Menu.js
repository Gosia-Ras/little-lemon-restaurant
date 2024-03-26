import salad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import fish from "../assets/grilled-fish.jpg";
import "../styles/Menu.css";

function Menu() {
  return (
    <section className="specials">
      <h2>This week's specials</h2>
      <a href="#">Online Menu</a>
      <div className="dishes">
        <a href="#">
          <img src={salad} alt="Greek salad" />
          <div>
            <h3>Greek Salad</h3>
            <p>$12.99</p>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <p>Order for delivery</p>
          </div>
        </a>
        <a href="#">
          <img src={bruschetta} alt="Bruschetta" />
          <div>
            <h3>Bruschetta</h3>
            <p>$9.89</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit orci
              sodales, taciti tristique ante curae scelerisque semper
              sollicitudin soci
            </p>
            <p>Order for delivery</p>
          </div>
        </a>
        <a href="#">
          <img src={fish} alt="Grilled fish" />
          <div>
            <h3>Grilled fish</h3>
            <p>$15.39</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit orci
              sodales, taciti tristique ante curae scelerisque semper
              sollicitudin soci
            </p>
            <p>Order for delivery</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Menu;
