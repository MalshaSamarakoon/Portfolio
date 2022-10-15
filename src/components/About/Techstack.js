import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiMysql,
  DiGit,
} from "react-icons/di";
import {
  SiPhp,
  SiFirebase,
  SiLinux,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={1} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
