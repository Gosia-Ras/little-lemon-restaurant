import React from "react";
import { useNavigate } from "react-router-dom"; //

import "../styles/BookingForm.css";
import bruschetta from "../assets/bruschetta.jpg";

function BookingForm() {
  const navigate = useNavigate(); //

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/sign-up");
  };
  return (
    <section className="booking">
      <h1>Find your table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">
            Date<span className="required"> *</span>
          </label>
          <input type="date" id="date" name="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="time">
            Time <span className="required"> *</span>
          </label>
          <select name="time">
            <option>15:00</option>
            <option>15:30</option>
            <option>16:00</option>
            <option>16:30</option>
            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
            <option>21:30</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">
            Guests <span className="required"> *</span>
          </label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="form-group table">
          <span>
            Table
            <br />
            (optional):
          </span>

          <div className="custom-radio-container">
            <label className="custom-radio">
              Inside
              <input
                type="radio"
                id="inside"
                name="tableLocation"
                value="inside"
                required
              />
              <span className="checkmark"></span>
            </label>

            <label className="custom-radio">
              Event Zone
              <input
                type="radio"
                id="event"
                name="tableLocation"
                value="event"
              />
              <span className="checkmark"></span>
            </label>

            <label className="custom-radio">
              Outside
              <input
                type="radio"
                id="outside"
                name="tableLocation"
                value="outside"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <input type="submit" className="submit" value="Reserve" />
      </form>
      <div className="image-container">
        <img src={bruschetta} alt="bruschetta" />
      </div>
    </section>
  );
}

export default BookingForm;
