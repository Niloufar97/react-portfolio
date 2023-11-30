import { useParams } from "react-router-dom"
import { ProjectsData } from "../../pages/projects/projectsData"
import Navigation from "../navbar/myNavbar"
import { Col , Row} from "react-bootstrap"

function ProjectInfo() {
    const projectId = parseInt(useParams().projectId)
    const projectInformation = ProjectsData.find(project => project.id === projectId )
  return (
    <div>
      <Navigation/>
      <Row>
        <Col>
          <img src={projectInformation.img}></img>
        </Col>
        <Col>
          <h2>{projectInformation.title}</h2>
          <h4>technologies used in this project:</h4>
          <p>{projectInformation.tech}</p>
          <h4>Project Completion:</h4>
          <p>{projectInformation.date}</p>
          <h4>Description:</h4>
          <p>{projectInformation.desc}</p>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectInfo
