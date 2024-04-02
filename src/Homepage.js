import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function Homepage() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Menu />
        <Testimonials />
      </Main>
      <Footer />
    </>
  );
}

export default Homepage;
