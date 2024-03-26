import heroImage from "../assets/restauranfood.jpg";
import "../styles/Hero.css";
function Hero() {
  return (
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
      <img src={heroImage} alt="Close-up of food" />
    </section>
  );
}

export default Hero;
