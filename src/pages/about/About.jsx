import Navigation from "../../components/navbar/myNavbar";
import { Row, Col, Container } from "react-bootstrap";
import heroImg from "../../assets/images/hero.svg";
import "./about.css";
import { EducationsInfo } from "./EducationsInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skill from "../../components/skills/skill";

const rowVariant = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

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
          <motion.div variants={rowVariant} initial="initial" animate="animate">
            <Row className="align-items-center my-2">
              <Col
                className="about-img-container d-flex justify-content-center"
                md={6}
              >
                <img src={heroImg} className="img-fluid" alt="Niloufar"></img>
              </Col>
              <Col className="about-me-text" md={6}>
                <p className="pt-5">
                  In early 2023, I dove headfirst into the world of frontend
                  development, getting all excited about making cool websites. I
                  started off by teaching myself HTML and CSS, the building
                  blocks of the web. But I wanted more, so I signed up for a
                  JavaScript course at ReDi School to really understand how to
                  make interactive and snazzy web designs.
                </p>
                <p>
                  I did not stop there; my hunger for learning led me to take a
                  React course. That was when things got even more interesting,
                  I was now crafting dynamic and responsive user interfaces like
                  a champ. Fast forward to October 2023, and guess what? I
                  joined Hack Your Future, a big move in my journey to becoming
                  a pro frontend developer. It is like the changing leaves in
                  fall, marking a significant step forward in my development
                  adventure. Super stoked about where this journey is taking me!
                </p>
              </Col>
            </Row>
          </motion.div>
          {/* education----------------------------------------------------------------------------------------------- */}
        </section>
        <div className="pageTitle ">
          <h2>My Education</h2>
        </div>
        <motion.section className="my-education">
          {EducationsInfo.map((education) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [ref, inView] = useInView({
              triggerOnce: false,
            });

            return (
              <motion.div
                key={education.id}
                variants={rowVariant}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                ref={ref}
              >
                <Row className="my-4 align-items-center justify-content-center">
                  <Col md={3} className="img-container">
                    <img src={education.img} alt={education.title} />
                  </Col>
                  <Col md={8} className="">
                    <div className="education-text">
                      <h3>
                        <a
                          href={education.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {education.title}
                        </a>
                      </h3>
                      <h4>{education.course}</h4>
                      <p>{education.desc}</p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            );
          })}
        </motion.section>
        <section className="skillbar"></section>
      </Container>
        {/* skills----------------------------------------------------------------------------------------------- */}
      <section>
        <Row className="pt-4">
          <div className="pageTitle mt-5">
            <h2>My Skills</h2>
          </div>
        </Row>
        <Row className="my-5 skills-row">
          <Skill tech='HTML' percentage={70}></Skill>
          <Skill tech='CSS' percentage={65}></Skill>
          <Skill tech='Bootstrap' percentage={70}></Skill>
          <Skill tech='Javascript' percentage={60}></Skill>
          <Skill tech='React' percentage={60}></Skill>
          <Skill tech='Git' percentage={70}></Skill>
        </Row>
      </section>
    </div>
  );
}

export default About;
