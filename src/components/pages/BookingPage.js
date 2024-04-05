import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

import BookingForm from "../sections/BookingForm";
import ImageGrid from "../sections/ImageGrid";

function BookingPage() {
  return (
    <>
      <Header />
      <Main>
        <BookingForm />
        <ImageGrid />
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;
