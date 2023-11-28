import { Col, Container, Row } from "react-bootstrap";
// import './projects.css'
import Project from "../../components/myProjects/Project";
import Navigation from "../../components/navbar/myNavbar";
import { ProjectsData } from "./projectsData";
import { useState } from "react";

function Projects() {
  const [myProjects , setMyProjects] = useState(ProjectsData);
  return (
    <div className="projects-container">
      <Navigation />
      <Container className="ps-container" >
        <Row >
          {myProjects.map((project) => (
            <Col key={project.id}  md={6} lg={4} >
              <Project {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
