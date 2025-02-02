import React from "react";
import Particles from "react-tsparticles";
import { useLocation } from "react-router-dom";


function Particle() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";


  return (
    <Particles  
    id="tsparticles"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: isHomePage, // Only move particles if on the Home page
            speed: isHomePage ? 0.50 : 0, // Make them static (speed: 0) on other pages
            random: false,
            straight: true,
            direction: "up",
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
