import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import website from "../../Assets/Projects/website.png";
import ard from "../../Assets/Projects/ard.png";
import jaldimail from "../../Assets/Projects/jaldimail.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ard}
              isBlog={false}
              title="HealthOMeter"
              description="Health Manager it measure Spo2 and Pulse rate and monitor it. Alerts user if Spo2 or Pulse rate is not normal Project is made using Arduino uno and max30102"
              ghLink="https://github.com/heyiampc/HealthOMeter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jaldimail}
              isBlog={false}
              title="jaldiMail"
              description="A TempMail Telegram bot Service To access the bot search jaldibot on Telegram "
              ghLink="https://github.com/heyiampc/jaldiMail"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="Online Auction Site"
              description="Django based Online Auction Site
              User can post auction listings, place bids on listings, comment on those listings, and add listings to a watchlist"
              ghLink="https://github.com/heyiampc/Online_Auction_Site"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
