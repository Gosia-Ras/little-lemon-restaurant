import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fakeAPI from "../../bookingApi";
import "../../styles/BookingForm.css";

function BookingForm({ state, dispatch }) {
  const { availableTimes, closureMessage } = state;
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    const result = fakeAPI.submitAPI(formData);

    if (result) {
      navigate("/sign-up");
    } else {
      console.error("Submission failed.");
    }
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
      <form onSubmit={handleSubmit} aria-describedby="closureMessage">
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
          <label htmlFor="time">
            Time{" "}
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
            {(availableTimes || []).map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">
            Guests{" "}
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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="form-group table">
          <span id="occasionLabel">
            Occasion
            <br />
            (optional):
          </span>
          <div
            className="custom-radio-container"
            role="radiogroup"
            aria-labelledby="occasionLabel"
          >
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
                  aria-checked={occasion === occ}
                />
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>

        <input type="submit" className="submit" value="Reserve" />
      </form>
    </section>
  );
}

export default BookingForm;
