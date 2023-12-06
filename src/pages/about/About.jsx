import Navigation from "../../components/navbar/myNavbar";
import { Row, Col, Container } from "react-bootstrap";
import NiloufarImg from "../../assets/images/Niloufar.png";
import "./about.css";
import { EducationsInfo } from "./EducationsInfo";
function About() {
  return (
    <div>
      <Navigation />
      <Container>
        <section className="about-me">
          <Row className="pt-4">
            <div className="pageTitle">
              <p>get to know more</p>
              <h2>About Me</h2>
            </div>
          </Row>
          <Row className="align-items-center my-5">
            <Col
              className="about-img-container d-flex justify-content-center"
              md={6}
            >
              <img src={NiloufarImg} className="img-fluid"></img>
            </Col>
            <Col className="about-me-text" md={6}>
              <p className="pt-5">
                In early 2023, I dove headfirst into the world of frontend
                development, getting all excited about making cool websites. I
                started off by teaching myself HTML and CSS, the building blocks
                of the web. But I wanted more, so I signed up for a JavaScript
                course at ReDi School to really understand how to make
                interactive and snazzy web designs.
              </p>
              <p>
                I did not stop there; my hunger for learning led me to take a
                React course. That was when things got even more interesting, I
                was now crafting dynamic and responsive user interfaces like a
                champ. Fast forward to October 2023, and guess what? I joined
                Hack Your Future, a big move in my journey to becoming a pro
                frontend developer. It is like the changing leaves in fall,
                marking a significant step forward in my development adventure.
                Super stoked about where this journey is taking me!
              </p>
            </Col>
          </Row>
        </section>
        <div className="pageTitle my-5">
          <h2>My Education</h2>
        </div>
        <section className="my-education ">
          {EducationsInfo.map((education) => (
            <Row className="my-4 align-items-center justify-content-center" key={education.id}>
              <Col md={3} className="img-container">
                <img src={education.img}></img>
              </Col>
              <Col md={8} className="">
                <div className="education-text">
                  <h3><a href={education.link} target="_blank" rel="noreferrer">{education.title}</a></h3>
                  <h4>{education.course}</h4>
                  <p>{education.desc}</p>
                </div>
              </Col>
            </Row>
          ))}
        </section>
      </Container>
    </div>
  );
}

export default About;