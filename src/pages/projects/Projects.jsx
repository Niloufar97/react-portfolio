import { Col, Container, Row } from "react-bootstrap";
// import './projects.css'
import Project from "../../components/myProjects/Project";
import Navigation from "../../components/navbar/myNavbar";
import { ProjectsData } from "./projectsData";
import { motion } from "framer-motion";
const containerVariant = {
  hidden: {
    x: "600px",
  },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};
function Projects() {
  const myProjects = ProjectsData;
  return (
    <div>
      <Navigation />
      <motion.div variants={containerVariant} initial="hidden" animate="visible"> 
        <div className="pageTitle">
          <p>explore some of</p>
          <h2>My Projects</h2>
        </div>
        <Container className="justify-content-center">
          <Row className="text-center">
            {myProjects.map((project) => (
              <Col key={project.id} md={6} lg={4}>
                <Project {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default Projects;
