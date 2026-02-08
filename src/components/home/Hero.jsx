import heroImage from "../../assets/images/hero/hero-bg-img.jpg";
import "../../styles/Hero.css";


/*
  Hero Section
  ------------
  Responsible ONLY for:
  - Main heading
  - Intro text
  - Social links
*/

function Hero() {
  return (
    <section className="hero"    style={{ "--hero-bg": `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>
          Building Bridges of <br />
          Faith, Hope, and Love
        </h1>

        <p>
          Welcome to the Orthodox Church website.
          A place of worship, teaching, and community.
        </p>

        <div className="hero-socials">
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">Telegram</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
