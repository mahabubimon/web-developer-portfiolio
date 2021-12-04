import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import profile from "./../../../images/profile.png";

const Banner = () => {
  return (
    <Container>
      <Row className="py-5 mt-5">
        <div className="col-lg-7 ps-5 mt-5 pt-5">
          <div>
            <h2>
              I'm <span className="text-info"> Mahabub Emon</span>
            </h2>
            <h4>Junior Web Developer</h4>
            <div className="d-flex pb-5">
              <li className="pe-2">Javascript</li>
              <li className="pe-2">React JS</li>
              <li className="pe-2">MERN Stack</li>
            </div>
            <Button>
              <a
                href="https://drive.google.com/file/d/1zby4CuHM6hlrwcCRNrxTFWpuHyh4qfdZ/view"
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
              >
                View Resume
              </a>
            </Button>
          </div>
          <div className="d-flex gap-2 pt-5">
            <Button>
              <a
                href="https://www.linkedin.com/in/mahabubimon/"
                className="text-decoration-none text-white"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button>
              <a
                href="https://github.com/mahabubimon/"
                className="text-decoration-none text-white"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="col-lg-5">
          <img className="img-fluid" src={profile} alt="" />
        </div>
      </Row>
    </Container>
  );
};

export default Banner;
