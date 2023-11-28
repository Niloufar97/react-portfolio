import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './project.css'

// eslint-disable-next-line react/prop-types
function Project({img , title}) {
  const customBtnStyle = {
    backgroundColor : '#fdedb1',
    borderColor :'#ffecb2',
    color:'black'
   
  }
  return (
    <div className="my-5">
      <Card style={{ width: "20rem", height:"30rem" }}>
        <Card.Img  src={img} className="card-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Button style={customBtnStyle}>Read more</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
