import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import hms from "../../Assets/Projects/hms.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import art from "../../Assets/Projects/art.PNG";
import hot from "../../Assets/Projects/hot.PNG";
import epms from "../../Assets/Projects/epms.png";
import game from "../../Assets/Projects/game.png";
import csm from "../../Assets/Projects/csm.PNG";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
           {/* <strong className="purple">My PROJECTS </strong> */}
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hot}
              isBlog={false}
              title="Hands of Thambapanni"
              description="A website to promote small and medium enterprises with donations and advertising
              React js | Firebase | Google geolocation API"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={epms}
              isBlog={false}
              title="Exam Process Management System"
              description="A web application that can manage all the functionalities of exam
              procedure (Students' Registering, Managing results, GPA Calculations) 
              </br>"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hostel Management System"
              description="A web application that can manage all the functionalities of a hotel. (Students' Registering, Managing results, GPA Calculations)
             Laravel framework | MySQL | XAMP Server"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="The Art Gallery"
              description="A web based CRUD application for an art gallery
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.
              Java | Spring Boot | MySQL | XAMP Server"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Mini Games for kids"
              description="A set of games developed for kids using image-processing techniques
              MatLab | Image Processing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csm}
              isBlog={false}
              title="Coffee Shop Management System"
              description="A web application that can manage all functions of a coffee shop, including ordering and billing
              JavaFX | MySQL | XAMP Server"
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
