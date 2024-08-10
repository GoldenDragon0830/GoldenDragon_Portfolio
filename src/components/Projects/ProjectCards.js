import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: '100px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title style={{ height: "50px" }}>{props.title}</Card.Title>
        <Card.Subtitle style={{ color: 'rgb(195, 0, 0)' }} className="mb-2 text-muted">{props.role}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify", height: "300px", overflowY: "auto" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.demoLink} target="_blank">
          <CgWebsite /> &nbsp;
          Demo Link
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
