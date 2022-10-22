import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      <br/>  <strong className="purple">Github</strong><br/><br/>
      </h1>
      <GitHubCalendar
        username="MalshaSamarakoon"
        blockSize={15}
        blockMargin={5}
        color="#30CED8"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
