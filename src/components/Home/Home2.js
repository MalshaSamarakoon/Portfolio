import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn,FaMedium } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="home-about-description">
          
            <h1 style={{ fontSize: "2.6em" }}>
              Introducing<span className="purple"> MYSELF </span> 
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something
              <br />
              <br />I am fluent in classics like C++, Javascript and Python.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
Web Technologies and Products and also in areas related to{" "}Deep Learning and Natural Launguage Processing.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with and Modern Javascript Library and Frameworks &nbsp; like React.js and Next.js
            </p>
         
        </Row>


        <Row>
          <Col md={12} className="home-about-social">
            <h1>Feel free to <span className="purple">CONTACT </span> me</h1>
       <br/><br/><br/>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MalshaSamarakoon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/malsha-samarakoon-66a6681aa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://malshasamarakoon.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
