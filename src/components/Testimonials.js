import "../styles/Testimonials.css";
import data from "../testimonialsData.json";

function Testimonials() {
  return (
    <section className="testimonials">
      <h3>testimonials</h3>
      <div className="testimonials-container">
        {data.testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <span className="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
            <p>
              {testimonial.name} {testimonial.surname}
            </p>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
