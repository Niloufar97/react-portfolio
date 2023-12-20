import { useParams } from "react-router-dom";
import { ProjectsData } from "../projects/projectsData";
import Navigation from "../../components/navbar/myNavbar";
import { Col, Container, Row } from "react-bootstrap";
import "./projectInfo.css";

function ProjectInfo() {
  const projectId = parseInt(useParams().projectId);
  const projectInformation = ProjectsData.find(
    (project) => project.id === projectId
  );
  return (
    <div>
      <Navigation />
      <Container>
        <Row className="py-5 align-items-center">
          <Col className="proImg-container" md={6}>
            <img src={projectInformation.img} className="img-fluid"></img>
          </Col>
          <Col>
            <h2>{projectInformation.title}</h2>
            <h4>technologies used in this project:</h4>
            <p>{projectInformation.tech}</p>
            <h4>Project Completion:</h4>
            <p>{projectInformation.date}</p>
            <h4>Description:</h4>
            <p className="description-text">{projectInformation.desc}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectInfo;
