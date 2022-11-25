import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prince Chaurasia </span>
            from <span className="purple"> Gorakhpur, India.</span>
            <br />I am pursuing B.Tech in Computer Science from SRM Chennai
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Eat Sleep Code Repeat "{" "}
          </p>
          <footer className="blockquote-footer">Prince Chaurasia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
