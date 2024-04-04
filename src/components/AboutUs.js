import aboutPhoto from "../assets/Mario and Adrian A.jpg";
import "../styles/About.css";

function AboutUs() {
  return (
    <section className="about" id="about" aria-labelledby="aboutUsTitle">
      <article>
        <h3>About Us</h3>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
      </article>
      <img src={aboutPhoto} alt="Adrian and Mario,founders of Little Lemon" />
    </section>
  );
}

export default AboutUs;
