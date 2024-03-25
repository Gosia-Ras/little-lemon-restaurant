import heroImage from "../assets/restauranfood.jpg";
import salad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import fish from "../assets/grilled-fish.jpg";
import "./Main.css";

function Main() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, located on Maldove
            Street in Chicaco, Illinois. We focus on traditional recipes served
            with a modern twist.
          </p>
          <button>Reserve a table</button>
        </div>
        <img src={heroImage} alt="Greek salad close-up" />
      </section>
      <section className="specials">
        <h2>This week's specials</h2>
        <a href="#">Online Menu</a>
        <div className="dishes">
          <a href="#">
            <img src={salad} />
            <div>
              <h3>Greek Salad</h3>
              <p>$12.99</p>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.{" "}
              </p>
              <p>Order for delivery</p>
            </div>
          </a>
          <a href="#">
            <img src={bruschetta} />
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
            <img src={fish} />
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
      <section className="testimonials">
        <h3>testimonials</h3>
        <div className="testimonials_container">
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
          <div className="testimonials_card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>Michael Caldwell</p>
            <p>This is the best Mediterranean food I've ever had!</p>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default Main;
