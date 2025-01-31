import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", textIndent: "2em" }}>
            Hello, I'm <span className="purple">Brianna Rocha</span>
            , a dedicated and detail-oriented software engineer based in <span className="purple">London, Canada</span>. With a background in inpatient pharmacy and a passion for problem-solving, I’ve transitioned into full-stack development to build impactful and efficient solutions. I thrive in dynamic environments, constantly seeking opportunities to learn, grow, and collaborate with others. Hardworking and adaptable, I love tackling challenges, refining my skills, and helping others along the way. I'm <span className="purple">currently seeking a role</span> where I can contribute my technical expertise and dedication to innovation. <span className="purple">Let’s connect</span> and build something amazing together!
            <br />
            <br />
            When I'm not coding, I enjoy these activities! ☺️
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 👾
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking & Baking 👩‍🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying Fit & Healthy 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading & Learning 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the World ✈️
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
