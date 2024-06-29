import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hariom Rajput </span>
            from <span className="purple"> Gwalior, India.</span>
            <br />
            

            <br />
            I have completed my  internship at <span className="purple ">Numeric Infosystem Pvt Ltd</span> -  08/Aug/2022 to 20/Feb/2023
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hariom Rajput</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
