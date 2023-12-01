import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navbar/myNavbar";
import heroImg from '../../assets/images/hero.svg'
import cvPdf from "../../assets/cv/Niloufar.pdf";
import AnimatedButton from "../../components/animatedButton/AnimatedButton";
import "./home.css";
import { motion } from "framer-motion";
const containerVariant = {
  hidden: {
    x:'600px'
  },
  visible : {
    x : 0,
    transition :{duration: 0.4, ease : 'easeInOut'}
  }
}

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Container  className="home-container py-5">
        <motion.div variants={containerVariant} initial="hidden" animate="visible">
        <Row className="my-5 align-items-center">
          <Col className="hero-txt " lg={6} >
            <div className="heroText" >
              <div className="hero-title">
                <h2>Hello I am,</h2>
                <h1>Niloufar</h1>
              </div>
              <h2>Junior Frontend Developer</h2>
            </div>
            <div className="heroButtons ">
              <a href={cvPdf} target="_blank" rel="noopener noreferrer" >
                <AnimatedButton color="#534da2"  text="Download CV" className="hero-btn" />
              </a>
              <a href="https://github.com/Niloufar97" target="_blank" rel="noopener noreferrer">
              <AnimatedButton color="#534da2"  text="My Github" className="hero-btn" />   
              </a>
            </div>
          </Col>
          <Col lg={6} >
            <img src={heroImg} alt="" className="img-fluid" />
          </Col>
        </Row>
        </motion.div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
