import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div>
      <section id="home">
        <Container fluid className="home-section">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={12} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋 
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Brianna Rocha</strong>
                </h1>

                <div style={{ padding: 15, textAlign: "center" }}>
                  <Type />
                </div>
                
                <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/BriannaRocha"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/rochabrianna/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <section id="about"> 
        <About/>
      </section>
      <section id="projects"> 
        <Projects/>
      </section>
    </div>
  );
}

export default Home;
