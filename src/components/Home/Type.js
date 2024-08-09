import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Open AI Engineer",
          "Front-End Engineer",
          "Back-End Engineer",
          "Full-Stack Developer",
          "Web Developer",
          "Mobile App Developer",
          "Machine Learning Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
