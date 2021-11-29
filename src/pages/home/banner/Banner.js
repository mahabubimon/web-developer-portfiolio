import React from "react";
import { Button, Container } from "react-bootstrap";
import avatar from "./../../../images/avatar-hi.png";
import "./banner.css";

const Banner = () => {
  return (
    <Container>
      <div className="row py-5">
        <div className="col-md-6">
          <h3 className="text-center text-info">I'm Mahabub Emon</h3>
          <h2>Web Designer</h2>
        </div>
        <div className="col-md-6">
          <img className="avatar-img" src={avatar} alt="" />
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
      </div>
    </Container>
  );
};

export default Banner;
