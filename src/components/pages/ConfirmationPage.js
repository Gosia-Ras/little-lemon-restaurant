import Main from "../Main";
import Header from "../Header";
import "../../styles/ConfirmationPage.css";
import Confirmation from "../sections/Confirmation";
import ImageGrid from "../sections/ImageGrid";
import Footer from "../Footer";

function ConfirmationPage() {
  return (
    <>
      <Header />
      <Main>
        <Confirmation />
        <ImageGrid />
      </Main>
      <Footer />
    </>
  );
}

export default ConfirmationPage;
