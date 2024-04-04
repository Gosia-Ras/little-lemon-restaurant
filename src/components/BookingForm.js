import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/BookingForm.css";
import bruschetta from "../assets/bruschetta.jpg";

function BookingForm({ state, dispatch }) {
  const { availableTimes, closureMessage } = state;
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/sign-up");
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    dispatch({ type: "UPDATE_TIMES_BASED_ON_DATE", date: newDate });
  };

  return (
    <section className="booking">
      <h1>Find your table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">
            Date<span className="required"> *</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            required
          />
          {closureMessage && (
            <div className="closure-message">{closureMessage}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">
            Time <span className="required"> *</span>
          </label>
          <select
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {(availableTimes || []).map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">
            Guests <span className="required"> *</span>
          </label>
          <select
            name="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="form-group table">
          <span>
            Occasion
            <br />
            (optional):
          </span>
          <div className="custom-radio-container">
            {["birthday", "Anniversary", "Business"].map((occ) => (
              <label key={occ} className="custom-radio">
                {occ}
                <input
                  type="radio"
                  id={occ}
                  name="occasion"
                  value={occ}
                  checked={occasion === occ}
                  onChange={(e) => setOccasion(e.target.value)}
                />
                <span className="checkmark"></span>
              </label>
            ))}
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
