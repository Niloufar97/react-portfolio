import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navbar/myNavbar";
import AnimatedButton from "../../components/animatedButton/AnimatedButton";
import cvPdf from "../../assets/cv/Niloufar.pdf";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <section className="heroSection">
        <div className="backgroundImg"></div>
        <div className="overlay"></div>
        <div className="heroTextContainer">
          <h3>Hi! I am Niloufar</h3>
          <h2>FrontEnd Developer</h2>
          <a href={cvPdf} target="_blank" rel="noopener noreferrer">
            <AnimatedButton
              color="white"
              text="Download CV"
              className="cvBTN"
            />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
