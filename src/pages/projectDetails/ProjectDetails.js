import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://mahabubimon.github.io/json-fake-data/portfolioProjects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  if (projects.length === 0) {
    return <h2>loading</h2>;
  }
  const project = projects.find((project) => Number(id) === project.id);
  const { name, img1, img2, img3, details, live, frontendCode, backendCode } =
    project;
  return (
    <div className="container mt-5 p-5">
      <Row>
        <Card className="col-md-6">
          <Card.Img src={img1} />
          <Card.Img src={img2} />
          <Card.Img src={img3} />
        </Card>
        <div className="col-md-6">
          <h2>{name}</h2>
          <h4>{details}</h4>
          <div className="pt-4">
            <Button className="me-2">
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
              >
                Live Site
              </a>
            </Button>
            <Button className="me-2">
              <a
                href={frontendCode}
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
              >
                Frontend Code
              </a>
            </Button>
            <Button>
              <a
                href={backendCode}
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
              >
                Backend Code
              </a>
            </Button>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default ProjectDetails;
