import React, { useState } from "react";
import { useFormData } from "../../FormDataContext";
import { useNavigate } from "react-router-dom";

import fakeAPI from "../../bookingApi";
import "../../styles/BookingForm.css";

function BookingForm({ state, dispatch }) {
  const { availableTimes, closureMessage } = state;
  const navigate = useNavigate();
  const { setFormData } = useFormData();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [seating, setseating] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ date, time, guests, seating, occasion });
    navigate("/details");
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    const dateObject = new Date(newDate);

    const availableTimes = fakeAPI.fetchAPI(dateObject);

    dispatch({
      type: "UPDATE_TIMES_BASED_ON_DATE",
      availableTimes,
    });
  };

  return (
    <section className="booking" aria-labelledby="bookingFormTitle">
      <h1 id="bookingFormTitle">Find your table</h1>
      <form
        onSubmit={handleSubmit}
        aria-describedby="closureMessage"
        className="booking-form"
      >
        <div className="row">
          {" "}
          <div
            className="custom-radio-container form-group"
            role="radiogroup"
            aria-labelledby="seatingLabel"
          >
            {["Outside seating", "Inside seating"].map((seat) => (
              <label key={seat} className="custom-radio">
                {seat}

                <input
                  type="radio"
                  id={seat}
                  name="seating"
                  value={seat}
                  checked={seating === seat}
                  onChange={(e) => setseating(e.target.value)}
                  aria-checked={seating === seat}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="form-group">
            <label htmlFor="date">
              Date
              <span className="required" aria-hidden="true">
                {" "}
                *
              </span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              required
              aria-required="true"
            />
            {closureMessage && (
              <div
                className="closure-message"
                id="closureMessage"
                role="alert"
                aria-live="assertive"
              >
                {closureMessage}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="guests">
              Guests
              <span className="required" aria-hidden="true">
                {" "}
                *
              </span>
            </label>
            <select
              name="guests"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              aria-required="true"
            >
              <option value="" disabled>
                Select guests
              </option>{" "}
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="form-group">
            <label htmlFor="occasion">Occasion (optional):</label>
            <select
              name="occasion"
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="" disabled>
                Occasion
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="time">
              Time
              <span className="required" aria-hidden="true">
                {" "}
                *
              </span>
            </label>
            <select
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              aria-required="true"
            >
              <option value="" disabled>
                Select time
              </option>{" "}
              {/* Placeholder option */}
              {(availableTimes || []).map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <input type="submit" className="submit" value="Reserve" />
        </div>
      </form>
    </section>
  );
}

export default BookingForm;
