import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";

function Homepage() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Menu />
        <Testimonials />
        <AboutUs />
      </Main>
      <Footer />
    </>
  );
}

export default Homepage;
