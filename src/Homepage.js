import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Menu from "./components/sections/Menu";
import Hero from "./components/sections/Hero";
import Testimonials from "./components/sections/Testimonials";
import AboutUs from "./components/sections/AboutUs";

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
