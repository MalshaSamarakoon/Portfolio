import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Frameworks from "./Frameworks";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}className="whoi">
        <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="">
 
 <h1 style={{ fontSize: "5.1em", paddingBottom: "20px" }}>
             <strong className="purple"> Who am I..</strong>
            </h1>          
        </Col>
          
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            <Aboutcard />
        </Col>
          
        </Row>
        <h1 className="project-heading">
           <strong className="purple">Languages and Technologies </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">IDEs and Editors</strong> 
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Frameworks</strong> 
        </h1>
        <Frameworks />
        <Row style={{ justifyContent: "center", padding: "10px" }}className="whoi">
        <Github />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
