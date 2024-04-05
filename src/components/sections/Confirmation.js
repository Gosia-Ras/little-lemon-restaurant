import "../../styles/Confirmation.css";

function Confirmation() {
  return (
    <section className="confirmation" aria-labelledby="confirmation-heading">
      <h2 id="confirmation-heading">Confirmation</h2>
      <p>Your Reservation has been confirmed, check your email</p>
      <a className="return-link" href="/">
        Return to homepage
      </a>
    </section>
  );
}

export default Confirmation;
