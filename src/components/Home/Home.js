import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div>
      <section id="home">
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={12} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Brianna Rocha</strong>
                </h1>

                <div style={{ padding: 15, textAlign: "center" }}>
                  <Type />
                </div>
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
