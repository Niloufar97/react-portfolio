import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navbar/myNavbar";
import HeroImg from "../../assets/images/hero.svg";
import cvPdf from "../../assets/cv/Niloufar.pdf"
import "./home.css";
function Home() {
  return (
    <div>
      <Navigation />
      <Container className="home-container">
        <Row>
          <Col className="hero-img">
            <img src={HeroImg} alt="hero-img" className="img-fluid" />
          </Col>
          <Col className="hero-txt">
            <div className="heroText">
              <h4>Hi, I am</h4>
              <h1>Niloufar</h1>
              <h2>Junior React Developer</h2>
            </div>
            <div className="heroButtons">
              <a href={cvPdf} target="_blank" rel="noopener noreferrer">
                <button className="hero-btn">Download CV</button>
              </a>
              <a href="https://github.com/Niloufar97" target="_blank" rel="noopener noreferrer">
                <button className="hero-btn">My Github</button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
