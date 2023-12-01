import { Col, Container, Row } from "react-bootstrap";
// import './projects.css'
import Project from "../../components/myProjects/Project";
import Navigation from "../../components/navbar/myNavbar";
import { ProjectsData } from "./projectsData";
function Projects() {
  const myProjects = ProjectsData
  return (
    <div className="projects-container">
      <Navigation />
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
    </div>
  );
}

export default Projects;
