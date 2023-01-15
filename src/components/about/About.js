import React from "react";
import { BsThreeDots, BsFolderFill } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HtmlLogo from "../../images/html-logo.png";
import CssLogo from "../../images/css-logo.png";
import JsLogo from "../../images/js-logo.png";
import ReactLogo from "../../images/react-logo.png";
import SassLogo from "../../images/sass-logo.png";
import MongoLogo from "../../images/mongo.png";
import ExpressLogo from "../../images/express-logo.png";
import NodeLogo from "../../images/node-logo.png";
import FireLogo from "../../images/fire-logo.png";
import AframeLogo from "../../images/aframe-logo.png";
import ThreeLogo from "../../images/three-logo.png";
import UnrealLogo from "../../images/unreal-logo.png";
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <h2>
        <span>A</span>bout <span>M</span>e
      </h2>
      <div className="about-info">
        <div className="explorer-section">
          <div className="explorer-header">
            <span>MY SKILLS</span>
            <BsThreeDots />
          </div>
          <Accordion className="accordian-container">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="dropdown" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="heading-content">
                <BsFolderFill className="filelogo-front" /> Frontend Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={HtmlLogo}
                  alt="html-logo"
                ></img>
                <span>HTML</span>
              </Typography>
              <Typography className="skill-content">
                <img className="skill-logo" src={CssLogo} alt="css-logo"></img>
                <span>CSS</span>
              </Typography>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={SassLogo}
                  alt="sass-logo"
                ></img>
                <span>Sass</span>
              </Typography>
              <Typography className="skill-content">
                <img className="skill-logo" src={JsLogo} alt="js-logo"></img>
                <span>JavaScript</span>
              </Typography>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={ReactLogo}
                  alt="react-logo"
                ></img>
                <span>React JS</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordian-container">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="dropdown" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="heading-content">
                <BsFolderFill className="filelogo-back" /> Backend Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={NodeLogo}
                  alt="node-logo"
                ></img>
                <span>Node JS</span>
              </Typography>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={MongoLogo}
                  alt="mongo-logo"
                ></img>
                <span>MongoDB</span>
              </Typography>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={ExpressLogo}
                  alt="express-logo"
                ></img>
                <span>Express JS</span>
              </Typography>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={FireLogo}
                  alt="firebase-logo"
                ></img>
                <span>Firebase</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accordian-container">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="dropdown" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="heading-content">
                <BsFolderFill className="filelogo-arvr" /> AR/VR Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={AframeLogo}
                  alt="aframe-logo"
                ></img>
                <span>Aframe</span>
              </Typography>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={ThreeLogo}
                  alt="three-logo"
                ></img>
                <span>Three JS</span>
              </Typography>
              <Typography className="skill-content">
                <img
                  className="skill-logo"
                  src={UnrealLogo}
                  alt="unreal-logo"
                ></img>
                <span>Unreal Engine</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="info-section">
          <ol start={40}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <span>{"/**"}</span>
            </li>
            <li>
              <span>{"* I am a Full Stack Developer."}</span>
            </li>
            <li>
              <span>
                {" * I have an academic background in Computer Engineering."}
              </span>
            </li>
            <li>
              <span>
                {
                  " * I have gained knowledge in Web Designing and Frontend Development as well as Backend Development."
                }
              </span>
            </li>
            <li>
              <span>
                {
                  "* Apart from it I have an experince in AR/VR Development and Digital Marketing."
                }
              </span>
            </li>
            <li>
              <span>
                {
                  "* I am seeking an opportunity where I can contribute the best through my skills."
                }
              </span>
            </li>
            <li>
              <span>
                {
                  "* I am seeking an opportunity where I can contribute the best through my skills."
                }
              </span>
            </li>
            <li>
              <span>{"**/"}</span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
