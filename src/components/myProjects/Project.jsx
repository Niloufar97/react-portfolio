import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './project.css'
import { Link } from "react-router-dom";
import AnimatedButton from "../animatedButton/AnimatedButton";

// eslint-disable-next-line react/prop-types
function Project({id, img , title, tech, github}) {
  return (
    <div className="my-5">
      <Card style={{ width: "20rem", height:"28rem" }}>
        <Card.Img  src={img} className="card-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {tech}
          </Card.Text>          
            <Link className="card-btn" to={`/ProjectsInfo/${id}`}><AnimatedButton text="Read more" className="projectCard-btn"/></Link>
            <Link className="card-btn" to={github} target="_blank"><AnimatedButton text="Source Code" className="projectCard-btn"/></Link>        
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
