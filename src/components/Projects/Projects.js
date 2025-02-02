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
              description="A full-stack video game tracking app built with JavaScript, Express, Node.js, MongoDB, and Mongoose. It features Google OAuth authentication, dynamic game list management, user-generated reviews, and profile customization. The app utilizes EJS for templating and follows a RESTful architecture to handle game data efficiently."
              ghLink="https://github.com/BriannaRocha/quest-central"
              demoLink="https://quest-central.fly.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookworm}
              isBlog={false}
              title="Bookworm 📚"
              description="A full-stack social app built with React, Node.js, Express.js, and MongoDB, integrating the Open Library API to showcase a dynamic collection of books. It features JWT authentication, React Router for seamless navigation, and a personalized bookshelf for logged-in users. Profile users can add books, write reviews, and engage with the community through comments. As the Scrum Manager and Documenter, I led project organization, handled documentation, and implemented key features to bring the app to completion."
              ghLink="https://github.com/Richardzk17/bookworm-front-end"
              demoLink="https://bookwormhub.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindfulDose}
              isBlog={false}
              title="Mindful Dose 💊"
              description="A full-stack medication tracking app designed to help users log doses and maintain a medication history. Built with Python, JavaScript, PostgreSQL, and AWS, the app leverages Docker for containerization and YAML for configuration management. This project showcases my ability to develop reliable and intuitive solutions for healthcare and personal wellness."
              ghLink="https://github.com/BriannaRocha/mindful-dose"
              demoLink="https://mindful-dose.fly.dev/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Matching: The Simpsons Edition 🧠"
              description="A fun and interactive memory matching card game featuring a Simpsons theme. Built with JavaScript, CSS3, and HTML5, the game challenges users to match pairs of cards while tracking moves and matches with counters. A timer adds an extra layer of excitement, and players can reset the game at any time. This project showcases my skills in creating engaging, browser-based games with dynamic functionality."
              ghLink="https://github.com/BriannaRocha/memory-matching"
              demoLink="https://mmcg-br.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticHalo}
              isBlog={false}
              title="Tic-Tac-Toe: Halo Edition ❌"
              description="As my first project, I created a Halo-themed Tic-Tac-Toe game using JavaScript, CSS3, and HTML5. This game integrates iconic Halo audio for an immersive experience, allowing players to enjoy a classic game with a unique twist. This project helped me establish a strong foundation in front-end development and game mechanics."
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
