/* eslint-disable react/no-unescaped-entities */
import Navigation from "../../components/navbar/myNavbar";
import { Row, Col, Container } from "react-bootstrap";
import heroImg from "../../assets/images/hero.svg";
import "./about.css";
import { EducationsInfo } from "./EducationsInfo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skill from "../../components/skills/Skill";
import Footer from "../../components/footer/Footer";

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
          <motion.div variants={rowVariant} initial="initial" animate="animate" className="about-motion-div">
            <Row className="align-items-center my-2">
              <Col
                className="about-img-container d-flex justify-content-center"
                md={6}
              >
                <img src={heroImg} className="img-fluid" alt="Niloufar"></img>
              </Col>
              <Col className="about-me-text" md={6}>
                <p className="pt-5">
                  My name is Niloufar and I am a 27 years old. In 2022, I made
                  the life-changing decision to relocate from Iran to Denmark to
                  support my husband's career. I left all my achievements
                  behind, and started a new life hoping for a better future for
                  my family. It was challenging to make it from scratch but I'm
                  happy to say that I am now an enthusiastic web developer with
                  a strong affinity for JavaScript. I'm passionate about
                  crafting modern and user-friendly web applications. As a team
                  player, problem solver, and continuous learner, I'm always
                  eager to take on new challenges and contribute to innovative
                  projects.
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
        {/* <section className="skillbar"></section> */}
      </Container>
      {/* skills----------------------------------------------------------------------------------------------- */}
      <section className="my-skills">
        <Row className="pt-4">
          <div className="pageTitle mt-5">
            <h2>My Skills</h2>
          </div>
        </Row>
        <Row className="my-5 skills-row">
          <Skill tech="HTML" percentage={80}></Skill>
          <Skill tech="CSS" percentage={65}></Skill>
          <Skill tech="Javascript" percentage={60}></Skill>
          <Skill tech="React" percentage={60}></Skill>
          <Skill tech="Git" percentage={70}></Skill>
          <Skill tech="NodeJs" percentage={50}></Skill>
        </Row>
      </section>
      <Footer />
    </div>
  );
}

export default About;
