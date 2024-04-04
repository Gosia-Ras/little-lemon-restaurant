import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import BookingForm from "./components/BookingForm";

function BookingPage() {
  return (
    <>
      <Header />
      <Main>
        <BookingForm />
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;
