import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = ({project}) => {
  const { id, name, img1 } = project;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Link to={`/project/${id}`}>
            <Button className="my-btn btn-sm mx-2 ">Project Details</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Project;
