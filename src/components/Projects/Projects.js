import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import questCentral from "../../Assets/Projects/questCentral.png";
import bookworm from "../../Assets/Projects/bookworm.png";
import mindfulDose from "../../Assets/Projects/mindfulDose.png";
import memory from "../../Assets/Projects/memory.png";
import ticHalo from "../../Assets/Projects/ticHalo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong> 👩‍💻
        </h1>
        <p style={{ color: "white" }}>
          A collection of projects reflecting my growth as a full-stack developer.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={questCentral}
              isBlog={false}
              title="Quest Central 👾"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/BriannaRocha/quest-central"
              demoLink="https://quest-central.fly.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookworm}
              isBlog={false}
              title="Bookworm 📚"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Richardzk17/bookworm-front-end"
              demoLink="https://bookwormhub.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindfulDose}
              isBlog={false}
              title="Mindful Dose 💊"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/BriannaRocha/mindful-dose"
              demoLink="https://mindful-dose.fly.dev/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Matching: Simpson Edition 🧠"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/BriannaRocha/memory-matching"
              demoLink="https://mmcg-br.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticHalo}
              isBlog={false}
              title="Tic-Tac-Toe: Halo Edition ❌"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/BriannaRocha/halo-ttt"
              demoLink="https://ttt-br.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
