import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projectData = [
  {
    imgPath: require("../../Assets/Projects/1.png"),
    isBlog: false,
    title: "Lumen 5 Video Generator using AI",
    description:
      "Lumen5 is a video creation platform that allows users to transform text content into engaging videos. \n Lumen5 helps businesses and individuals create videos quickly and easily, often from blog posts or articles. \n Content marketers, social media managers, educators, and anyone looking to create video content without extensive video editing skills can use it.",
    demoLink: "https://lumen5.com/",
  },
  {
    imgPath: require("../../Assets/Projects/2.png"),
    isBlog: false,
    title: "Web 3.0 social media platform for creators",
    description:
      "A Web 3.0 social media platform for creators, fans and businesses to rock. VOXE aims to give users security, privacy, and monetization opportunities that they deserve.",
    demoLink: "https://www.voxe.io/",
  },
  {
    imgPath: require("../../Assets/Projects/3.png"),
    isBlog: false,
    title: "Customized AI Medical Platform for Streamlining Medical Processes",
    description:
      "🚀 Empowers healthcare professionals to assign personalized medical interviews to patients. \n 🌐 Integrates LangChain and ClaudeAI for intelligent and interactive chatbot-based medical interviews. \n 🌟 Automatically generates detailed and accurate medical interview summaries using advanced algorithms. \n 🗣️ Provides a secure and confidential platform for patients to engage in health-related discussions. \n 📊 Enables physicians to review patient responses, medical history, and relevant details through comprehensive interview summaries.",
    demoLink: "https://smarthistory.ai/",
  },
  {
    imgPath: require("../../Assets/Projects/1.png"),
    isBlog: false,
    title: "Lumen 5 Video Generator using AI",
    description:
      "Lumen5 is a video creation platform that allows users to transform text content into engaging videos. \n Lumen5 helps businesses and individuals create videos quickly and easily, often from blog posts or articles. \n Content marketers, social media managers, educators, and anyone looking to create video content without extensive video editing skills can use it.",
    demoLink: "https://lumen5.com/",
  },
];

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
          {projectData.map((element, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={element.imgPath}
                isBlog={element.isBlog}
                title={element.title}
                description={element.description}
                demoLink={element.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
