import Main from "./components/Main";
import Header from "./components/Header";
import "./styles/ConfirmationPage.css";

function ConfirmationPage() {
  return (
    <>
      <Header />
      <Main>
        <section className="confirmation">
          <p className="lead">Your request has been successfully sent!</p>
          <p>You can review reservation details in the personal account.</p>
          <br />
          <a href="/">Return to homepage</a>
        </section>
      </Main>
    </>
  );
}

export default ConfirmationPage;
