import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Projects.css';

import R1 from '../images/R1.png';
import R2 from '../images/R2.png';
import R3 from '../images/R3.png';
import F1 from '../images/F1.png';
import F2 from '../images/F2.png';
import F3 from '../images/F3.png';
import F4 from '../images/F4.png';
import A1 from '../images/A1.png';
import A2 from '../images/A2.png';
import A3 from '../images/A3.png';
import po1 from "../images/po1.png";
import po2 from "../images/po2.png";
import po3 from "../images/po3.png";
import po4 from "../images/po4.png";
import po5 from "../images/po5.png";

const projects = [
  {
    id: 1,
    name: "Restaurant Application(MERN)",
    images: [R1, R2,R3],
    sourceCode: "https://github.com/M-Pavan-Kumar/Restaurant_application.git"
  },
  {
    id: 2,
    name: "Freelancer Website(MERN)",
    images: [F1, F2,F3,F4],
    sourceCode: "https://github.com/M-Pavan-Kumar/Freelancer-Mern.git"
  },
  {
    id: 3,
    name: "Amazon Frontend Uing Bootstrap",
    images: [A1, A2,A3],
    sourceCode: "https://github.com/M-Pavan-Kumar/Amazon_frontend.git"
  },
  {
    id: 4,
    name: "My Portfolio (React)",
    images: [po1,po2,po3,po4,po5],
    sourceCode: "https://github.com/M-Pavan-Kumar/Pavan_Portfolio"
  },
  // Add more projects as needed
];

function ProjectCard({ project }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="project-card">
      <Slider {...settings}>
        {project.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${project.name} screenshot ${index + 1}`} className="project-image" />
          </div>
        ))}
      </Slider>
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="view-source-btn">
          <FontAwesomeIcon icon={faGithub} /> View Source
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
