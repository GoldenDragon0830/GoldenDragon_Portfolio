import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "AI Engineer",
          "Front-End Engineer",
          "Back-End Engineer",
          "Full-Stack Developer",
          "Web Application Developer",
          "Mobile App Developer",
          "Machine Learning Engineer",
          "LLM Prompt Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
