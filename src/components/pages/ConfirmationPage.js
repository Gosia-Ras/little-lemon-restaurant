import Main from "../Main";
import Header from "../Header";
import "../../styles/ConfirmationPage.css";

function ConfirmationPage() {
  return (
    <>
      <Header />
      <Main>
        <section
          className="confirmation"
          aria-labelledby="confirmation-heading"
        >
          <h2 id="confirmation-heading">Confirmation</h2>
          <p className="lead">Your request has been successfully sent!</p>
          <p>You can review reservation details in the personal account.</p>
          <br />
          <a className="return-link" href="/">
            Return to homepage
          </a>
        </section>
      </Main>
    </>
  );
}

export default ConfirmationPage;
