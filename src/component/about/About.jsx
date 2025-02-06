import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.modules.scss";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
  
    gsap.from(".About h2", {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".About h2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Animating the about text when it comes into view
    gsap.from(".about-text", {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Animating the experience and people sections when they come into view
    gsap.from(".experience, .people", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".experience-people",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="About" id="about">
      <h2>Our Story</h2>
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-text">
            <h4>About Us</h4>
            <p>
              We are a group of nutrition doctors who collaborate to create a
              forum where people can consult about their nutritional needs. We
              are available in more than 50 cities in 2 countries: Indonesia and
              Australia. We also collaborate with farmers and farms to get
              high-quality food ingredients so people can get them easily.
            </p>
          </div>

          <div className="experience-people">
            <div className="experience">
              <h4>5+</h4>
              <p>Years of experience in nutrition and healthcare</p>
            </div>

            <div className="people">
              <h4>100+</h4>
              <p>More than 100 people entrust their nutrition to us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
