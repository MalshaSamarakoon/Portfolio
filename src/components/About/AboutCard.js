import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             Malsha is a final year undergraduate at the department of Computer Science and Informatics, Uva Wellassa University, specializing in Computer Science and Technology.
            <br />
            <br />
          </p>
         
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
