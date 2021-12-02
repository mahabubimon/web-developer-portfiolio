import React, { useEffect, useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://mahabubimon.github.io/json-fake-data/portfolioProjects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);


  return (
    <Container>
      <div className="container text-center py-5">
        <h2>My Recent Projects</h2>
        <CardGroup className="row row-cols-1 row-cols-md-3 g-4 p-4">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </CardGroup>
      </div>
    </Container>
  );
};

export default Projects;
