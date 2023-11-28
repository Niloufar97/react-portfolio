import { Col, Container, Row } from "react-bootstrap";
// import './projects.css'
import Project from "../../components/myProjects/Project";
import Navigation from "../../components/navbar/myNavbar";
import todoImg from '../../assets/images/project-img/todoList.png'
import portfolioImg from '../../assets/images/project-img/portfolio2.png'
import kaospilotImg from '../../assets/images/project-img/kaospilot-toolbox.png'
import calculatorImg from '../../assets/images/project-img/Calculator4.png'
import shoppingCardImg from '../../assets/images/project-img/shopping card.png'
import { useState } from "react";

function Projects() {
  const [myProjects , setMyProjects] = useState([
    {
      id: 1,
      title: "Todo List",
      img: todoImg,
      tech : "HTML, CSS , Javascript"
    },
    {
      id: 2,
      title: "Portfolio",
      img: portfolioImg,
      tech: "HTML, CSS"
    },
    {
      id: 3,
      title: "Kaospilot-toolbox",
      img: kaospilotImg,
      tech : "HTML, CSS , Javascript"
    },
    {
      id: 4,
      title: "Shopping Card",
      img: shoppingCardImg,
      tech : "HTML, CSS , Javascript"
    },
    {
      id: 5,
      title: "Calculator App",
      img: calculatorImg,
      tech : "React.js, ES6"
    },
  ]);
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
