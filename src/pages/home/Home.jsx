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
        <Row className="my-5 align-items-center">
          <Col className="hero-txt mt-4 mr-5" lg={6} >
            <div className="heroText">
              <h4>Hi, I am</h4>
              <h1>Niloufar</h1>
              <h2>Junior React Developer</h2>
            </div>
            <div className="heroButtons ">
              <a href={cvPdf} target="_blank" rel="noopener noreferrer" >
                <button className="hero-btn ml-3">Download CV</button>
              </a>
              <a href="https://github.com/Niloufar97" target="_blank" rel="noopener noreferrer">
                <button className="hero-btn">My Github</button>
              </a>
            </div>
          </Col>
          <Col className="hero-img mt-3 mb-3" lg={6} >
            <img src={HeroImg} alt="hero-img" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
