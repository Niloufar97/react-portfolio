import { Container, Row , Col} from "react-bootstrap"
import Footer from "../../components/footer/Footer"
import Navigation from "../../components/navbar/myNavbar"
import HeroImg from '../../assets/images/hero.svg'
import './home.css'
function Home() {
  return (
    <div>
      <Navigation />
      <Container className="home-container">
        <Row>
          <Col className="hero-img">
            <img src={HeroImg} alt="hero-img" className="img-fluid"/>
          </Col>
          <Col className="hero-txt">
            <h2>Hello, I am</h2>
            <h1>Niloufar</h1>
            <h2>Junior React.js Developer</h2>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Home
