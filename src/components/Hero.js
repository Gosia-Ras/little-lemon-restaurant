import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/restauranfood.jpg";
import "../styles/Hero.css";
function Hero() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <section className="hero">
      <div>
        <div>
          {" "}
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <div className="flex-container">
          {" "}
          <p>
            We are a family-owned Mediterranean restaurant, located on Maldove
            Street in Chicaco, Illinois. We focus on traditional recipes served
            with a modern twist.
          </p>
          <div className="image-container">
            <img src={heroImage} alt="Close-up of food" />
          </div>
        </div>
        <button onClick={handleBooking}>Reserve a table</button>
      </div>
    </section>
  );
}

export default Hero;
