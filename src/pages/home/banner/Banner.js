import React from "react";
import { Button } from "react-bootstrap";
import avatar from "./../../../images/avatar-hi.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row py-5 d-flex flex-row-reverse text-center">
        <div className="col-lg-5 py-5">
          <img className="img-fluid" src={avatar} alt="" />
        </div>
        <div className="col-lg-7 position-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
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
          <div className="position-absolute top-100 start-50 translate-middle d-flex gap-2">
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
      </div>
    </div>
  );
};

export default Banner;
