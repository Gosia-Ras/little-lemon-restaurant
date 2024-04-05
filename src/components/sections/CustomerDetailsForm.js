import { useFormData } from "../../FormDataContext";
import { useNavigate } from "react-router-dom";

function CustomerDetailsForm() {
  const navigate = useNavigate();
  const { formData } = useFormData();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/confirmation");
  };
  return (
    <section className="customer-details">
      <form onSubmit={handleSubmit} aria-describedby="bookingFormDetails">
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">
              First name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              Last name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@company.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
            />
          </div>
        </div>
        <div className="row booking-details">
          <div className="form-data-info">
            <div className="icon-text-group">
              <span className="material-symbols-outlined">event</span>
              <p>{formData.date || "Select Date"}</p>
            </div>
            <div className="icon-text-group">
              <span className="material-symbols-outlined">person</span>
              <p>{formData.guests || "Diners"}</p>
            </div>
            <div className="icon-text-group">
              <span className="material-symbols-outlined">schedule</span>
              <p>{formData.time || "Time"}</p>
            </div>
            <div className="icon-text-group">
              <span className="material-symbols-outlined">brunch_dining</span>
              <p>{formData.occasion || "Occasion"}</p>
            </div>
            {formData.seating && (
              <div className="icon-text-group seating">
                <i className="icon-seating"></i>
                <p>{formData.seating}</p>
              </div>
            )}
          </div>
          <div className="form-group">
            {" "}
            <label htmlFor="requests">Special requests:</label>
            <textarea
              id="requests"
              name="requests"
              placeholder="Comment"
              rows="8"
            ></textarea>
          </div>
        </div>
        <div className="form-group agreement">
          <label htmlFor="agreement">
            <input type="radio" required />
            You agree to our friendly <a href="#">privacy policy</a>
          </label>
        </div>
        <input type="submit" className="submit" value="Reserve" />
      </form>
    </section>
  );
}

export default CustomerDetailsForm;
