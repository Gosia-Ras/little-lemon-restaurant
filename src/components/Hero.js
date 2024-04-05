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
      <>
        <div className="content-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>{" "}
          <p>
            We are a family-owned Mediterranean restaurant, located on Maldove
            Street in Chicaco, Illinois. We focus on traditional recipes served
            with a modern twist.
          </p>
          <button onClick={handleBooking}>Reserve a table</button>
        </div>
        <div className="image-container">
          <img
            src={heroImage}
            alt="Close-up of food at Little Lemon, showcasing the restaurant's Mediterranean cuisine."
          />
        </div>
      </>
    </section>
  );
}

export default Hero;
