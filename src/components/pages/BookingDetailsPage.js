import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import ImageGrid from "../sections/ImageGrid";
import "../../styles/BookingPage.css";
import "../../styles/Form.css";
import CustomerDetailsForm from "../sections/CustomerDetailsForm";

function BookingPage() {
  return (
    <>
      <Header />
      <Main>
        <CustomerDetailsForm />
        <ImageGrid />
      </Main>
      <Footer />
    </>
  );
}

export default BookingPage;
