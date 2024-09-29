import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Are you looking to automate your existing or new {" "}
              <b className="purple">AI products</b>? 🤷‍♂️
              <br />
              <br />I specialize in developing web and mobile applications that
              harness the power of OpenAI to propel businesses forward and
              enhance user engagement in their digital environments.
              <br />
              <br />
              With over 6 years of experience in Full Stack and Product
              Development, I bring a wealth of knowledge and expertise to every
              project. My proficiency extends to VICIdial, VoIP, and system
              administration, ensuring seamless integration of communication
              technologies.
              <br />
              <br />
              My services encompass a broad spectrum, including automating email
              processes with <b className="purple">ChatGPT</b>, developing
              intelligent chatbots for e-commerce platforms, and providing
              comprehensive web scraping solutions.
              <br />
              <br />
              As an AI and ML engineer, I delve into exciting domains like
              computer vision and data science, enabling machines to interpret
              visual data and extract valuable insights. Let's collaborate to
              innovate and drive your projects to success!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="white">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/goldendragon0830"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/goldendragon0830"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/goldendragon0830"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/goldendragon0830"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
