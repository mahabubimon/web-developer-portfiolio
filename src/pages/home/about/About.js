import React from "react";
import { Container, Row } from "react-bootstrap";
import about from "./../../../images/banner-2.png";

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center">About Me</h2>
      <Row>
        <div className="col-md-6">
          <img className="avatar-img" src={about} alt="" />
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info pt-5">Pabel Mahabub Imon</h3>
          <p className="lead p-5">
            Enthusiastic front-end developer is eager to contribute to team
            success through hard work, attention to detail, and excellent
            collaboration. Well-versed in JavaScript, React, Material UI,
            Bootstrap and Google search.Motivated to learn, grow and explore in
            programming industries.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default About;
