import { Col, Container, Row } from "react-bootstrap";
import Project from "../../components/myProjects/Project";
import Navigation from "../../components/navbar/myNavbar";

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "Todo List",
      img: "https://github-production-user-asset-6210df.s3.amazonaws.com/126332294/280533766-25d68257-ea66-41d8-abee-77546fd12111.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231126T161017Z&X-Amz-Expires=300&X-Amz-Signature=584566af554be4dc5cf21883b694203dcc2cdfa41bc46d4031a770694a2b3d17&X-Amz-SignedHeaders=host&actor_id=126332294&key_id=0&repo_id=654565590",
    },
    {
      id: 2,
      title: "Portfolio",
      img: "https://github-production-user-asset-6210df.s3.amazonaws.com/126332294/280533766-25d68257-ea66-41d8-abee-77546fd12111.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231126T161017Z&X-Amz-Expires=300&X-Amz-Signature=584566af554be4dc5cf21883b694203dcc2cdfa41bc46d4031a770694a2b3d17&X-Amz-SignedHeaders=host&actor_id=126332294&key_id=0&repo_id=654565590",
    },
    {
      id: 3,
      title: "Kaospilot-toolbox",
      img: "https://github-production-user-asset-6210df.s3.amazonaws.com/126332294/280533766-25d68257-ea66-41d8-abee-77546fd12111.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231126T161017Z&X-Amz-Expires=300&X-Amz-Signature=584566af554be4dc5cf21883b694203dcc2cdfa41bc46d4031a770694a2b3d17&X-Amz-SignedHeaders=host&actor_id=126332294&key_id=0&repo_id=654565590",
    },
  ];
  return (
    <div>
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
