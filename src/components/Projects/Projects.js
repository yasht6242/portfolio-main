import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from '../../Assets/Projects/emotion.jpeg'
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.jpg";
import suicide from "../../Assets/Projects/suicide.jpg";
import bitsOfCode from "../../Assets/Projects/blog.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="Moodify"
              description="Developed a sleek and responsive music player website using React.js and
              Tailwind CSS. This immersive platform provides features such as playing,
              pausing, and skipping tracks, search functionality, user customization
              options, and seamless navigation."
              ghLink="https://github.com/yasht6242/moodify"
              demoLink="https://moodify-phi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SocialSync"
              description="SocialSync is a dynamic social media website developed using ReactJS,
              ExpressJS, MongoDB, and React Redux. This platform allows users to create
              profiles, connect with others, and engage in meaningful interactions."
              ghLink="https://github.com/yasht6242/socialsync"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="iResume"
              description="Effortlessly create professional resumes with customizable templates and a user-friendly interface. Built using React.js and CSS for a seamless experience."
              ghLink="https://github.com/yasht6242/Online-Resume-Builder"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="KnowItAll"
              description="Explore endless knowledge with this website powered by OpenAI's API. Ask any question and receive instant answers. Built using React.js and CSS for a seamless user experience."
              ghLink="https://github.com/yasht6242/KnowItAll"
              demoLink="https://code-x-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Betify"
              description="Betify: React.js, Redux, Tailwind CSS-powered betting website. Secure authentication, diverse sports betting options, responsive design, payment integration, live streaming, admin panel. Elevate your betting experience with Betify today."
              ghLink="https://github.com/yasht6242/bet-app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sign Language Recognition"
              description="This project implements hand sign recognition through computer vision and deep learning. It recognizes and interprets hand signs using a trained neural network model."
              ghLink="https://github.com/yasht6242/sign-language-recognition"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
