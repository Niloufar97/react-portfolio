import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './project.css'
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Project({id, img , title, tech, github}) {
  const customBtnStyle = {
    backgroundColor : '#fdedb1',
    borderColor :'#ffecb2',
    color:'black'
   
  }
  return (
    <div className="my-5">
      <Card style={{ width: "20rem", height:"28rem" }}>
        <Card.Img  src={img} className="card-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {tech}
          </Card.Text>
          <Button   style={customBtnStyle}>
            <Link className="card-btn" to={`/ProjectsInfo/${id}`}>Read more</Link>
          </Button>
          <Button className="mx-3" style={customBtnStyle}>
            <Link className="card-btn" to={github} target="_blank">Source Code </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
