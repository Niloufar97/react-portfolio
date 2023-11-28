import { Col, Container, Row } from "react-bootstrap";
import './projects.css'
import Project from "../../components/myProjects/Project";
import Navigation from "../../components/navbar/myNavbar";
import todoImg from '../../assets/images/project-img/todoList.png'
import portfolioImg from '../../assets/images/project-img/portfolio2.png'
import kaospilotImg from '../../assets/images/project-img/kaospilot-toolbox.png'

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Todo List",
      img: todoImg
    },
    {
      id: 2,
      title: "Portfolio",
      img: portfolioImg
    },
    {
      id: 3,
      title: "Kaospilot-toolbox",
      img: kaospilotImg
    }
  ];
  return (
    <div className="projects-container">
      <Navigation />
      <Container>
        <Row>
          {myProjects.map((project) => (
            <Col key={project.id}>
              <Project {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
