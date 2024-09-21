import React from 'react';
import '../styles/About.css';
import ProfileImage from '../images/Pavan.jpg'; // Make sure this path is correct
// Import skill images (you'll need to add these to your project)
import PythonImage from '../images/Python.png';
 import CImage from '../images/C.png';
import HTMLImage from '../images/Html.png';
import CSSImage from '../images/Css.png';
import JavaScriptImage from '../images/Javascript.png';
import BootstrapImage from '../images/Bootstrap.png';
import MERNImage from '../images/Mern_img.png';
import LogicalThinkingImage from '../images/Logical.png';
import CreativityImage from '../images/Creative.png';
import ProblemSolvingImage from '../images/Problem-solving.png';
import TeamWorkImage from '../images/Team.png';

const skills = [
  { name: "Python", image: PythonImage},
  { name: "C", image: CImage },
  { name: "HTML", image: HTMLImage },
  { name: "CSS", image: CSSImage },
  { name: "JavaScript (Basics)", image: JavaScriptImage },
  { name: "Bootstrap", image: BootstrapImage },
  { name: "MERN Stack", image: MERNImage },
  { name: "Logical Thinking", image: LogicalThinkingImage },
  { name: "Creativity", image: CreativityImage },
  { name: "Problem Solving", image: ProblemSolvingImage },
  { name: "Team Work", image: TeamWorkImage }
];

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="profile-image">
          <img src={ProfileImage} alt="Pavan Kumar" />
        </div>
        <div className="about-description">
          <h2>Pavan Kumar Maruboina</h2>
          <p>
            Hello! I'm Pavan Kumar, a passionate web developer and aspiring AI/ML engineer. 
            I have a strong foundation in MERN stack development and I'm constantly expanding 
            my skills in the world of technology. With a keen eye for detail and a love for 
            problem-solving, I strive to create efficient and user-friendly web applications.
          </p>
          <p>
            My journey in tech has been driven by curiosity and a desire to make a positive 
            impact through innovative solutions. When I'm not coding, you can find me exploring 
            new technologies, contributing to open-source projects, or enhancing my skills in 
            artificial intelligence and machine learning.
          </p>
        </div>
      </div>
      
      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;