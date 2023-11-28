import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './project.css'

// eslint-disable-next-line react/prop-types
function Project({img , title}) {
  return (
    <div className="my-5">
      <Card style={{ width: "20rem", height:"30rem" }}>
        <Card.Img variant="top" src={img} className="card-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
