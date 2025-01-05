import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__avatar">
        <img
          src="../src/assets/avatar.png"
          alt="author image"
          className="about__image"
        />
      </div>
      <div className="about__content">
        <div className="about__title"> About the author</div>
        <div className="about__text">
          <p>
            {" "}
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p>
            {" "}
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
