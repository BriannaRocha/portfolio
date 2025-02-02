import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";


import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleScrollLinkClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });

      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              {location.pathname === "/" ? ( 
                <Link 
                  to="home" 
                  smooth={true}
                  duration={300}
                  className="nav-link"
                  spy={true}
                  activeClass="nav-hover"
                  href="#home"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Link>
              ) : (
                <a href="#home" onClick={() => handleScrollLinkClick("home")} className="nav-link">
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </a>
              )}
            </Nav.Item>

            <Nav.Item>
              {location.pathname === "/" ? ( 
                <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-80}
                  className="nav-link"
                  spy={true}
                  activeClass="nav-hover"
                  href="#about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Link>
              ) : (
                <a href="#about" onClick={() => handleScrollLinkClick("about")} className="nav-link">
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </a>
              )}
            </Nav.Item>

            <Nav.Item>
            {location.pathname === "/" ? ( 
                <Link
                  to="projects"
                  smooth={true}
                  duration={300}
                  offset={-80}
                  className="nav-link"
                  spy={true}
                  activeClass="nav-hover"
                  href="#projects"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Link>
              ) : (
                <a href="#projects" onClick={() => handleScrollLinkClick("projects")} className="nav-link">
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </a>
              )}
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={RouterLink}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
